import axios from 'axios';
import { BASE_URL } from './config';

export const askTheCosmos = async (message) => {
  const response = await axios.post(`${BASE_URL}/api/ask`, { message });
  return response.data.reply;
};
