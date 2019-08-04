import axios from '@/services/axios.js';

export default {
  all() {
    return axios.get('/side-dish/', {});
  },
  list(params) {
    axios.get('/side-dish/', {});
  },
  find(id) {
    axios.get('/side-dish/', {_id: id});
  },
  create(data) {
    axios.post('/side-dish/', data);
  },
  update(id, data) {
    axios.patch('/side-dish/', data);
  },
  delete(id) {
    axios.delete('/side-dish/');
  },
};
