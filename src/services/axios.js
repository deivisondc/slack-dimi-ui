import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});
console.log(process.env.VUE_APP_API_BASE_URL);
instance.defaults.headers['Content-Type'] = 'application/json';

export default instance;
