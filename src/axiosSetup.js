import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
    const token = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });


export default axiosInstance;