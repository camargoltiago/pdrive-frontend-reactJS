import axios from 'axios';

const api = axios.create({
   baseURL: 'https://pdrive-backend.herokuapp.com',
});

export default api;