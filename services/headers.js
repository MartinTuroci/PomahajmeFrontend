import authStore from "../store/auth";

export default class Headers {
  constructor() {
    this.value = {
      headers: {}
    };
  }

  addAuthToken() {
    this.value.headers.Authorization = `Bearer ${authStore.state.token}`;
    return this;
  }
  addJsonContentType() {
    this.value.headers["content-type"] = "application/json";
    return this;
  }
  addMultipartFormData() {
    this.value.headers["content-type"] = "multipart/form-data";
    return this;
  }
  return() {
    return this.value;
  }
}
