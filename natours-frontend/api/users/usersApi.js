import Api from '@/api/api';

class usersApi extends Api {
  constructor() {
    super();
  }

  async updateUserImage(data) {
    const response = await this.request(
      () =>
        this.http.post('/api/v1/users/update-photo', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      {
        notify_success: true,
        notify_error: true,
      }
    );
    if (response?.status) {
      return response.status;
    }
  }

  async updateUserPassword(password, passwordNew, passwordConfirmNew) {
    const response = await this.request(
      () =>
        this.http.patch('/api/v1/users/update-password', {
          password,
          passwordNew,
          passwordConfirmNew
        }),
      {
        notify_success: true,
        notify_error: true,
      }
    );
    if (response?.status) {
      return response.status;
    }
  }
}

export default new usersApi();
