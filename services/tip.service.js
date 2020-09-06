import axios from 'axios';
import URL from '@/utils/urls';

class TipService {
  storeTip(tip) {
    return axios.post(URL.TIP.TIP_URL, tip);
  }
  approveTip(tip) {
    return axios.post(URL.TIP.APPROVE, tip);
  }
  deleteTip(id) {
    return axios.delete(`${URL.TIP.TIP_URL}?id=${id}`);
  }
  updateTip(tip) {
    return axios.put(URL.TIP.TIP_URL, tip);
  }
  getTip(id) {
    return axios.get(`${URL.TIP.TIP_URL}?id=${id}`);
  }
  getList(page, paginateBy = 15) {
    return axios.get(`${URL.TIP.LIST}?page=${page}&paginateBy=${paginateBy}`);
  }
  getUnapprovedList(page, paginateBy = 15) {
    return axios.get(`${URL.TIP.UNAPPROVED}?page=${page}&paginateBy=${paginateBy}`);
  }
}
export default new TipService();
