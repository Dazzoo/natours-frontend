const axios = require('axios');
import { toast } from 'react-toastify';
import { parse } from 'cookie';

class Api {
  constructor() {
    this.http = axios.create({
      baseURL: `${process.env.API_BASE_URL}`,
      timeout: 30000,
      headers: { 'X-Custom-Header': 'foobar' },
      withCredentials: true,
    });
  }

  async request(func, options) {
    try {
      let res = await func();
      console.log('api-res', res)
      if (options?.notify_success) {
        if (String(res.status)?.startsWith('2')) {
          toast.success(`${res?.data?.message || res?.data?.status}`);
        }
      }
      return res;
    } catch (error) {
      console.log('api-error', error)
      if (options?.notify_error) {
        if (error?.response?.data?.message) {
          toast.error(`${error?.response?.data?.message}`);
        }
      }
      return error.response
    }
  }
}

export default Api;
