import axios from 'axios';
import { BASE_URL } from './config';

export const fetchMarsPhotos = async ({ date, rover, camera }) => {
  const params = { earth_date: date };
  if (rover) params.rover = rover;
  if (camera) params.camera = camera;

  const response = await axios.get(`${BASE_URL}/api/mars`, { params });
  console.log(BASE_URL,response.data)
  return response.data;
};
