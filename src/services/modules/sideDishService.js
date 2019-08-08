import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/side-dish/');
  },
  list(params) {
    return axios.get('/side-dish/', params);
  },
  find(id) {
    return axios.get(`/side-dish/${id}`);
  },
  create(data) {
    return axios.post('/side-dish/', data);
  },
  update(id, data) {
    return axios.patch(`/side-dish/${id}`, data);
  },
  delete(id) {
    return axios.delete(`/side-dish/${id}`);
  },
};
