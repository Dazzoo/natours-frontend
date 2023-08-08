const axios = require('axios');

export default async function getTours() {
  try {
    const apiUrl = `${process.env.API_BASE_URL}/api/v1/tours`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    console.log(response.data.data.data);

    return response.data.data.data;

    return response;
  } catch (error) {}
}
