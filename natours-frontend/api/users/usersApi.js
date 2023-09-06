import Api from '@/api/api';

class usersApi extends Api {
  constructor() {
    super();
  }

  async updateUserImage(data) {
    const response = await this.request(() =>
      this.http.post(
        '/api/v1/users/update-photo',
        {
          data,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
    );
    if (response) {
      return response.data.data.data;
    }
  }
}

export default new usersApi();
