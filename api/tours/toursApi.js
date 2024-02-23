import Api from '@/api/api';

class toursApi extends Api {
  constructor() {
    super();
  }

  async getTours() {
    const response = await this.request(() => this.http.get('/api/v1/tours'));
    if (response?.data.data.data) {
      return response.data.data.data;
    }
  }

  async getTourBySlug(slug) {
    const response = await this.request(() => this.http.get(`/api/v1/tours/params/${slug}`));
    if (response?.data.data.data) {
      return response.data.data.data;
    }
  }
}

export default new toursApi();
