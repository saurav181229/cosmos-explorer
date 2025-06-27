import axios from 'axios';

export const askTheCosmos = async (message) => {
  const response = await axios.post('http://localhost:3000/api/ask', { message });
  return response.data.reply;
};
