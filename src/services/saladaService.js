import axios from 'axios';

const url = 'http://localhost:8080/api/v1/device-defect-types';

export default {
  all() {
    return axios.get(url, {});
  },
  list(params) {
    axios.get(url, {});
  },
  find(id) {
    axios.get(url, {_id: id});
  },
  create(data) {
    axios.post(url, data);
  },
  update(id, data) {
    axios.patch(url, data);
  },
  delete(id) {
    axios.delete(url);
  },
};
