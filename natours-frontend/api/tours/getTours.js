const axios = require('axios');

export default async function getTours() {
  try {
    const apiUrl = `${process.env.API_BASE_URL}/api/v1/tours`;
    const response = await axios.get(apiUrl);

    return response.data.data.data;

    return response;
  } catch (error) {
    console.log(error);
  }
}
