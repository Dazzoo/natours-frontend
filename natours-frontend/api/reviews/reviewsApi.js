import Api from '@/api/api';

class toursApi extends Api {
  constructor() {
    super();
  }

  async getReviewsByTourId(tourId, token) {
    const response = await this.request(() => this.http.get(`/api/v1/tours/${tourId}/reviews`));
    if (response) {
      return response.data.data.data;
    }
  }
}

export default new toursApi();
