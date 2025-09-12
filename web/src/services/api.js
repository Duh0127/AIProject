import axios from 'axios';

export const backendApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

backendApi.interceptors.request.use(
    (config) => {
        console.log(`[API] Request: ${config.method.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

backendApi.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('[API] Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default backendApi;
