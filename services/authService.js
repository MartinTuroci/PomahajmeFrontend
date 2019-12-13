import Headers from './headers';
import httpClient from './httpClient';
import urls from '../utils/urls';

export default class AuthService {
    login(credentials) {
        return httpClient.post(urls.AUTH.LOGIN, credentials, new Headers().addJsonContentType().return());
    }
    refresh() {
        return httpClient.post(urls.AUTH.REFRESH_TOKEN, {
            name: 'name',
            password: 'pass'
        }, new Headers().addAuthToken().return());
    }
    logout() {
        return httpClient.post(urls.AUTH.LOGOUT, {
            name: 'name',
            password: 'pass'
        }, new Headers().addJsonContentType().return());
    }
}
