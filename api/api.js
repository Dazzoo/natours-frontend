const axios = require('axios');
import { toast } from 'react-toastify';
import { parse } from 'cookie';

class Api {
  // Check if we're in a browser environment

  constructor() {
    this.jwtHeader
    if (typeof window !== 'undefined') {
      this.jwtHeader = window.localStorage.getItem('jwt');
    }
    this.http = axios.create({
      baseURL: `${process.env.API_BASE_URL}`,
      timeout: 30000,
      headers: { 'X-Custom-Header': 'foobar', 'jwt': this.jwtHeader },
      withCredentials: true,
    });
  }

  async request(func, options) {
    try {
      let res = await func();
      if (options?.notify_success) {
        if (String(res.status)?.startsWith('2')) {
          toast.success(`${res?.data?.message || res?.data?.status}`);
        }
      }
      return res;
    } catch (error) {
      if (options?.notify_error) {
        if (error?.response?.data?.message) {
          toast.error(`${error?.response?.data?.message}`);
        } else if (error.message) {
          toast.error(`${error.message}`);
        }
      }
      return error.response
    }
  }
}

export default Api;
