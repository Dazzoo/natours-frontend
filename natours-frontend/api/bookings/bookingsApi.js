import Api from '@/api/api';

class bookingsApi extends Api {
  constructor() {
    super();
  }

  async getCheckoutSession(tourId) {
    const response = await this.request(() => this.http.get(`/api/v1/bookings/checkout-session/${tourId}`));
    if (response) {
      return response;
    }
  }
}

export default new bookingsApi();
