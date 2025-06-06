import axios from 'axios';

export default function getImagesByQuery(query) {
  const link = 'https://pixabay.com/api/';
  return axios
    .get(link, {
      params: {
        key: '50483673-3addba2370166e44fbbdc4d02',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return null;
    });
}
