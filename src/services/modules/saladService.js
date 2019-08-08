import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/salad/');
  },
  list(params) {
    return axios.get('/salad/', params);
  },
  find(id) {
    return axios.get(`/salad/${id}`);
  },
  create(data) {
    return axios.post('/salad/', data);
  },
  update(id, data) {
    return axios.patch(`/salad/${id}`, data);
  },
  delete(id) {
    return axios.delete(`/salad/${id}`);
  },
};
