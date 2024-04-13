import axios from 'axios';
const callApi = async (
  method: string,
  endpoint: string,
  data: Object | FormData,
  // token?: string,
) => {
  const options = {
    method: method,
    // headers: { 'Authorization': `Bearer ${token}` },
    data: data,
    url: `${'http://localhost:3000/'}${endpoint}`,
  };

  // if (token) {
  //   options. = { 'Authorization': `Bearer ${token}` };
  // }
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
