import axios from 'axios';
import urls from '@/utils/urls';

class AuthService {
  login(credentials) {
    return axios.post(urls.AUTH.LOGIN, credentials);
  }

  logout() {
    return axios.post(urls.AUTH.LOGOUT, {
      name: '',
      password: '',
    });
  }
}
export default new AuthService();
