const axios = require('axios');
import { toast } from 'react-toastify';

class Api {
  constructor() {
    this.http = axios.create({
      baseURL: `${process.env.API_BASE_URL}`,
      timeout: 10000,
      headers: { 'X-Custom-Header': 'foobar' },
    });
  }
  async request(func, options) {
    try {
      let res = await func();
      console.log(res);
      if (options?.notify_success) {
        if (String(res.status)?.startsWith('2')) {
          toast.success(`${res?.data?.message || res?.data?.status}`);
        }
      }
      debugger;
      return res;
    } catch (error) {
      if (options?.notify_error) {
        if (error?.response?.data?.message) {
          toast.error(`${error?.response?.data?.message}`);
        }
      }
    }
  }
}

export default Api;
