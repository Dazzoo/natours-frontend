import Api from '@/api/api';

class toursApi extends Api {
  constructor() {
    super();
  }

  async getTours(jwt) {
    this.http.interceptors.request.use(config => {
      // Access cookies from the document object

      // Add the cookies to the request headers
      if (jwt) {
        config.headers.token = jwt;
        console.log('config.headers', config.headers);
      }

      return config;
    });

    const response = await this.request(() => this.http.get('/api/v1/tours'));
    return response.data.data.data;
  }

  async getTourBySlug(slug) {
    const response = await this.request(() => this.http.get(`/api/v1/tours/params/${slug}`));
    return response.data.data.data;
  }
}

export default new toursApi();
