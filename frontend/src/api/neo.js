import axios from 'axios';

export const fetchNEOData = async (start, end) => {
  const response = await axios.get('http://localhost:3000/api/neo', {
    params: { start_date: start, end_date: end },
  });
  return response.data;
};
