const AUTH_URL = `/api/auth`;
const STORY_URL = `/api/story`;
const AUCTION_URL = `/api/auction`;
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://pomahajme.sk';

export default {
  AUTH: {
    LOGIN: `${AUTH_URL}/login`,
    LOGOUT: `${AUTH_URL}/logout`,
    REFRESH_TOKEN: `${AUTH_URL}/refresh`,
  },
  BASE_URL,
  STORY: {
    STORY_URL: `${STORY_URL}`,
    LIST: `${STORY_URL}/list`,
    IMAGES_UPLOAD: `${STORY_URL}/uploadImages`,
    IMAGES_STORAGE: `/images`,
  },
  AUCTION: {
    AUCTION_URL: `${AUCTION_URL}`,
    LIST: `${AUCTION_URL}/list`,
    IMAGES_UPLOAD: `${AUCTION_URL}/uploadImages`,
    IMAGES_STORAGE: `/auctionImages`,
  },
};
