import storage from '@/lib/storage';
import axios from 'axios';

const formatApiUrl = (rawUrl?: string): string => {
  if (!rawUrl) return '';
  let cleanUrl = rawUrl.trim().replace(/^["']|["']$/g, '');
  if (cleanUrl && !cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `http://${cleanUrl}`;
  }
  return cleanUrl;
};

export const API_BASE_URL = formatApiUrl(
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL
);

if (!API_BASE_URL && typeof window !== 'undefined') {
  console.warn("⚠️ NEXT_PUBLIC_API_URL environment variable is not set!");
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  (config) => {
    const token = storage.getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let message = error.response?.data?.message || error.message;
    if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      (error.response.data.error?.errors ||
        error.response.data.error?.errorParams)
    ) {
      message =
        error.response.data.error?.errors.join(',') ||
        error.response.data.error?.errorParams
          ?.map((e: any) => e.message || e.msg)
          ?.join(',');
    }
    return Promise.reject({
      statusCode: error.response?.status,
      message: message
    });
  }
);

export default apiClient;
