const axios = require('axios');

class Api {
  constructor() {
    this.http = axios.create({
      baseURL: `${process.env.API_BASE_URL}`,
      timeout: 10000,
      headers: { 'X-Custom-Header': 'foobar' },
    });
  }
  async request(func) {
    try {
      let res = await func();
      return res;
    } catch (error) {
      console.log('err');
    }
  }
}

export default Api;
