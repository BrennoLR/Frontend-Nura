import axios from 'axios';
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: 'http://localhost:8356/',
});

// Adiciona o token JWT em todas as requisições
api.interceptors.request.use(config => {
  const token = Cookies.get('authToken');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});