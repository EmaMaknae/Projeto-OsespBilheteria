import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Adiciona o token ao cabeçalho de todas as requisições
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Token enviado:', token); // Adicionando console.log para depurar o token
  }
  return config;
});

export default instance;
