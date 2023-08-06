const axios = require('axios');

export default async function getTours() {
  try {
    const apiUrl = `${process.env.API_BASE_URL}/tours`;
    const response = await axios.get(apiUrl);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
