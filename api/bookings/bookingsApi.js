import Api from '@/api/api';

class bookingsApi extends Api {
  constructor() {
    super();
  }

  async getCheckoutSession(tourId, token) {
    const response = await this.request(() => this.http.get(`/api/v1/bookings/checkout-session/${tourId}`, { headers: { token } }));
    if (response) {
      return response;
    }
  }

  async getMyBookings(token) {
    const response = await this.request(() => this.http.get(`/api/v1/bookings/my`, { headers: { cookie: `jwt=${token}` } }));
    if (response.data.data) {
      return response.data.data
    }
  }

  async createBooking(tourId, userId, price) {
    const response = await this.request(
      () =>
        this.http.post('/api/v1/bookings/', {tour: tourId, user: userId, price}),
      {
        notify_success: false,
        notify_error: false,
      }
    );
    if (response) {
      return response;
    }
  }
}

export default new bookingsApi();
