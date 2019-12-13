import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://pomahajme.sk";
const instance = axios.create({
  baseURL,
  timeout: 10000,
  params: {} // do not remove this, its added to add params later in the config
});

export default instance;
