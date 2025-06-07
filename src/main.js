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

let searchText = '';
let page = 1;

const moreButton = document.querySelector('.more-button');
moreButton.addEventListener('click', async () => {
  page += 1;
  console.log(page, searchText);
  try {
    const nextPictures = await getImagesByQuery(searchText, page);
    console.log(nextPictures.totalHits - page * 15);
    if (nextPictures.totalHits <= page * 15) {
      hideLoadMoreButton();
    }
    createGallery(nextPictures.hits);
  } catch (error) {
    console.error(error);
    return null;
  }
});

document.querySelector('.form').addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  const messageData = {
    title: '',
    titleColor: 'red',
    position: 'topRight',
  };

  const userQuerry = e.target.elements['search-text'].value.trim();

  if (userQuerry !== '') {
    searchText = userQuerry;
    clearGallery();
    showLoader();

    try {
      const images = await getImagesByQuery(searchText, page);
      const imgArr = images.hits;

      if (imgArr.length !== 0) {
        createGallery(imgArr);
        showLoadMoreButton();
      } else {
        messageData.title =
          'Sorry, there are no images matching your search query. Please try again!';
        iziToast.show(messageData);
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
