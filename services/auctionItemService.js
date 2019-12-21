import axios from 'axios';
import URL from '@/utils/urls';

class AuctionItemService {
  storeAuctionItem(auctionItem) {
    return axios.post(URL.AUCTION.AUCTION_URL, auctionItem);
  }
  deleteAuctionItem(id) {
    return axios.delete(`${URL.AUCTION.AUCTION_URL}?id=${id}`);
  }
  updateAuctionItem(auctionItem) {
    return axios.put(URL.AUCTION.AUCTION_URL, auctionItem);
  }
  getAuctionItem(id) {
    return axios.get(`${URL.AUCTION.AUCTION_URL}?id=${id}`);
  }
  getList(page, paginateBy = 15) {
    return axios.get(`${URL.AUCTION.LIST}?page=${page}&paginateBy=${paginateBy}`);
  }
  uploadImages(images, id) {
    const formData = new FormData();
    images.forEach(image => formData.append('auctionImages[]', image));
    return axios.post(`${URL.AUCTION.IMAGES_UPLOAD}?id=${id}`, formData);
  }
}
export default new AuctionItemService();
