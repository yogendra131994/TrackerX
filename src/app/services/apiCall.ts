import axios from 'axios';
import { base_url } from './apiEndpoints';
const callApi = async (
  method: string,
  endpoint: string,
  data: Object | FormData,
  token?: string,
) => {
  const options = {
    method: method,
    headers: { 'Authorization': `Bearer ${token}` },
    data: data,
    url: `${base_url}${endpoint}`,
  };

  if (token) {
    options.headers = { 'Authorization': `Bearer ${token}` };
  }
  try {
    const response = await axios(options);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export default callApi;
