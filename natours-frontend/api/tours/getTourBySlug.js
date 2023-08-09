const axios = require('axios');

export default async function getTourBySlug(slug) {
  try {
    console.log('slug', slug);
    const apiUrl = `${process.env.API_BASE_URL}/api/v1/tours/params/${slug}`;
    const response = await axios.get(apiUrl);

    return response.data.data.data;

    return response;
  } catch (error) {
    console.log(error);
  }
}
