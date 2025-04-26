import axios from 'axios';

// 프론트엔드는 프록시 경로만 알면 된다!
const BASE_URL = '/api/chat';

export const instance = axios.create({
  baseURL: BASE_URL,
});