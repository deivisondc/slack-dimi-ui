import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/menu/', {});
  },
  list(params) {
    axios.get('/menu/', {});
  },
  find(id) {
    axios.get('/menu/', {_id: id});
  },
  create(data) {
    axios.post('/menu/', data);
  },
  update(id, data) {
    axios.patch('/menu/', data);
  },
  delete(id) {
    axios.delete('/menu/');
  },
};
