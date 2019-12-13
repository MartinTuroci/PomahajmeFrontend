import Headers from './headers';
import httpClient from './httpClient';
import URL from './../utils/urls';

export default class StoryService {

  storeStory(story) {
    return httpClient.post(URL.STORY.STORY_URL, story, new Headers().addAuthToken().addJsonContentType().return());
  }
  deleteStory(id) {
    return httpClient.delete(`${URL.STORY.STORY_URL}?id=${id}`, new Headers().addAuthToken().addJsonContentType().return());
  }
  updateStory(story) {
    return httpClient.put(URL.STORY.STORY_URL, story, new Headers().addAuthToken().addJsonContentType().return());
  }
  getStory(id) {
    return httpClient.get(`${URL.STORY.STORY_URL}?id=${id}`);
  }
  getList(page, paginateBy = 15) {
    return httpClient.get(`${URL.STORY.LIST}?page=${page}&paginateBy=${paginateBy}`);
  }
  uploadImages(images, id) {
    const formData = new FormData();
    images.forEach(image => formData.append("images[]", image));
    return httpClient.post(`${URL.STORY.IMAGES_UPLOAD}?id=${id}`, formData, new Headers().addAuthToken().addMultipartFormData().return());
  }
}
