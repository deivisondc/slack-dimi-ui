import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/menu/');
  },
  list(params) {
    return axios.get('/menu/', params);
  },
  find(id) {
    return axios.get(`/menu/${id}`);
  },
  create(data) {
    return axios.post('/menu/', data);
  },
  update(id, data) {
    return axios.patch(`/menu/${id}`, data);
  },
  delete(id) {
    return axios.delete(`/menu/${id}`);
  },
};
