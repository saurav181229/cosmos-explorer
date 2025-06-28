import axios from 'axios';
import { BASE_URL } from './config';

export const searchNASAImages = async (query) => {
  const response = await axios.get(`${BASE_URL}/api/search`, {
    params: { q: query },
  });
  return response.data;
};
