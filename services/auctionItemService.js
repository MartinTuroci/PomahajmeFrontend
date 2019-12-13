import Headers from './headers';
import httpClient from './httpClient';
import URL from '../utils/urls';

export default class AuctionItemService {

    storeAuctionItem(auctionItem) {
        return httpClient.post(URL.AUCTION.AUCTION_URL, auctionItem, new Headers().addAuthToken().addJsonContentType().return());
    }
    deleteAuctionItem(id) {
        return httpClient.delete(`${URL.AUCTION.AUCTION_URL}?id=${id}`, new Headers().addAuthToken().addJsonContentType().return());
    }
    updateAuctionItem(auctionItem) {
        return httpClient.put(URL.AUCTION.AUCTION_URL, auctionItem, new Headers().addAuthToken().addJsonContentType().return());
    }
    getAuctionItem(id) {
        return httpClient.get(`${URL.AUCTION.AUCTION_URL}?id=${id}`);
    }
    getList(page, paginateBy = 15) {
        return httpClient.get(`${URL.AUCTION.LIST}?page=${page}&paginateBy=${paginateBy}`);
    }
    uploadImages(images, id) {
        const formData = new FormData();
        images.forEach(image => formData.append("auctionImages[]", image));
        return httpClient.post(`${URL.AUCTION.IMAGES_UPLOAD}?id=${id}`, formData, new Headers().addAuthToken().addMultipartFormData().return());
    }
}
