import axios from 'axios';
import URL from '@/utils/urls';

class StoryService {
  storeStory(story) {
    return axios.post(URL.STORY.STORY_URL, story);
  }
  deleteStory(id) {
    return axios.delete(`${URL.STORY.STORY_URL}?id=${id}`);
  }
  updateStory(story) {
    return axios.put(URL.STORY.STORY_URL, story);
  }
  getStory(id) {
    return axios.get(`${URL.STORY.STORY_URL}?id=${id}`);
  }
  getList(page, paginateBy = 15) {
    return axios.get(`${URL.STORY.LIST}?page=${page}&paginateBy=${paginateBy}`);
  }
  uploadImages(images, id) {
    const formData = new FormData();
    images.forEach(image => formData.append('images[]', image));
    return axios.post(`${URL.STORY.IMAGES_UPLOAD}?id=${id}`, formData);
  }
}
export default new StoryService();
