import axios from 'axios';

export default async function getImagesByQuery(query, page = 1) {
  const link = 'https://vercel-api-proxy-six-fawn.vercel.app/api/proxy';
  try {
    const response = await axios.get(link, {
      params: {
        source: 'pixabay',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
