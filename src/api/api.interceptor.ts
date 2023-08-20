import axios from 'axios';
import { SERVER_URL } from 'src/constants/constants';
import { errorCatch, getContentType } from './api.helper';
import { getAccessToken, removeFromStorage } from '@services/auth/auth.helper';
import { AuthService } from '@services/auth/auth.service';

export const instance = axios.create({
  baseURL: SERVER_URL,
  headers: getContentType()
});

instance.interceptors.request.use(async config => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

instance.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config_isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        AuthService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeFromStorage();
      }
    }

    throw error;
  }
);
