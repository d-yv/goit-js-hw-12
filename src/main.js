import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const messageData = {
  title: '',
  titleColor: 'red',
  position: 'topRight',
};

let searchText = '';
let page = 1;

// const gallery = document.querySelector('.gallery');
// const domRect = gallery.getBoundingClientRect();
// console.log(domRect);

const moreButton = document.querySelector('.more-button');
moreButton.addEventListener('click', async () => {
  page += 1;
  console.log(page, searchText);
  hideLoadMoreButton();
  showLoader();
  try {
    const nextPictures = await getImagesByQuery(searchText, page);
    console.log(nextPictures.totalHits - page * 15);
    if (nextPictures.totalHits <= page * 15) {
      hideLoadMoreButton();
      messageData.title =
        "We're sorry, but you've reached the end of search results.";
      iziToast.show(messageData);
    }

    createGallery(nextPictures.hits);

    window.scrollBy(0, window.innerHeight);
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    hideLoader();
    showLoadMoreButton();
  }
});

document.querySelector('.form').addEventListener('submit', async e => {
  e.preventDefault();
  hideLoadMoreButton();
  page = 1;

  const userQuerry = e.target.elements['search-text'].value.trim();

  if (userQuerry !== '') {
    searchText = userQuerry;
    clearGallery();
    showLoader();

    try {
      const images = await getImagesByQuery(searchText, page);
      const imgArr = images.hits;
      console.log('imagesTotalHits, page*15  ', images.totalHits, page * 15);

      if (imgArr.length === 0) {
        messageData.title =
          'Sorry, there are no images matching your search query. Please try again!';
        iziToast.show(messageData);
        return;
      }

      createGallery(imgArr);

      if (images.totalHits <= page * 15) {
        hideLoadMoreButton();
      } else {
        showLoadMoreButton();
      }
    } catch (error) {
      messageData.title =
        'An error occurred while fetching images. Please try again later.';
      iziToast.show(messageData);
      console.error('Fetch error:', error);
    } finally {
      hideLoader();
    }
  } else {
    messageData.title = 'Form field must be filled in!';
    iziToast.show(messageData);
  }

  e.target.reset();
});
