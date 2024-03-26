import axios from 'axios';
import axios from '@/SosAxios.js'; 

export default axios;

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJsZWFuZHJvLmJlcnRvbmNpbkBka3AtaXQuY29tLmJyIiwiaWF0IjoxNzExMjAzMjEyLCJleHAiOjE3MTEyMDY4MTJ9.blLEL995I6Q_5-0KseVmbf6cxO8MBh4e6YBvsAzQjL0'; // Substitua pelo seu token JWT

// Defina o token JWT como cabeçalho de autorização padrão para todas as solicitações Axios
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


axios.get('http://localhost:3000/api/login')
  .then(response => {
    console.log('Resposta da solicitação:', response.data);
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });
