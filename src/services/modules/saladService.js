import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/salad/', {});
  },
  list(params) {
    axios.get('/salad/', {});
  },
  find(id) {
    axios.get('/salad/', {_id: id});
  },
  create(data) {
    axios.post('/salad/', data);
  },
  update(id, data) {
    axios.patch('/salad/', data);
  },
  delete(id) {
    axios.delete('/salad/');
  },
};
