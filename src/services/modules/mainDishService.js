import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/main-dish/');
  },
  list(params) {
    return axios.get('/main-dish/', params);
  },
  find(id) {
    return axios.get(`/main-dish/${id}`);
  },
  create(data) {
    return axios.post('/main-dish/', data);
  },
  update(id, data) {
    return axios.patch(`/main-dish/${id}`, data);
  },
  delete(id) {
    return axios.delete(`/main-dish/${id}`);
  },
};
