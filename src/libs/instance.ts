import axios from 'axios';

const BASE_URL = '/api/chat'; // FE는 프록시 경로만 알면됨

export const instance = axios.create({
  baseURL: BASE_URL,
}); 