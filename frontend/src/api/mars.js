import axios from 'axios';

export const fetchMarsPhotos = async ({ date, rover, camera }) => {
  const params = { earth_date: date };
  if (rover) params.rover = rover;
  if (camera) params.camera = camera;

  const response = await axios.get('http://localhost:3000/api/mars', { params });
  return response.data;
};
