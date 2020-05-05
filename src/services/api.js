import axios from 'axios';

const api = axios.create({
  baseURL: 'http://knuckles4x.pythonanywhere.com/lolshop',
});

export default api;
