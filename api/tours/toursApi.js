import Api from '@/api/api';

class toursApi extends Api {
  constructor() {
    super();
  }

  async getTours() {
    const response = await this.request(() => this.http.get('/api/v1/tours'));
    return response.data.data.data;
  }

  async getTourBySlug(slug) {
    const response = await this.request(() => this.http.get(`/api/v1/tours/params/${slug}`));
    return response.data.data.data;
  }
}

export default new toursApi();
