import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/main-dish/', {});
  },
  list(params) {
    axios.get('/main-dish/', {});
  },
  find(id) {
    axios.get('/main-dish/', {_id: id});
  },
  create(data) {
    axios.post('/main-dish/', data);
  },
  update(id, data) {
    axios.patch('/main-dish/', data);
  },
  delete(id) {
    axios.delete('/main-dish/');
  },
};
