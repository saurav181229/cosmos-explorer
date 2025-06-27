import axios from 'axios';


export const fetchApod = async () => {
  console.log("")
  const response = await axios.get('http://localhost:3000/api/apod');
  console.log(response.da)
  return response.data;

};
export default fetchApod