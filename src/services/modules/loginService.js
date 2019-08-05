import axios from '@/services/axios.js';

export default {
  login(payload) {
    return axios.post('/login/', { payload });
  },
  logout(payload) {
    return axios.post('/logout/', { payload });
  },
};
