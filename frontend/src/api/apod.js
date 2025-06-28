import axios from 'axios';
import { BASE_URL } from './config';


export const fetchApod = async () => {

  
  const response = await axios.get(`${BASE_URL}/api/apod`);

  return response.data;

};
export default fetchApod