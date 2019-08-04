import axios from '@/services/axios.js';

export default {
  login() {
    return axios.get('/login/', {});
  },
};
