import axios from 'axios';

export const searchNASAImages = async (query) => {
  const response = await axios.get('http://localhost:3000/api/search', {
    params: { q: query },
  });
  return response.data;
};
