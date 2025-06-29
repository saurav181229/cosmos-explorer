import axios from 'axios';
import { BASE_URL } from './config';

export const fetchNEOData = async (start, end) => {
  const response = await axios.get(`${BASE_URL}/api/neo`, {
    params: { start_date: start, end_date: end },
  });
  return response.data;
};
