import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:7007', // Replace with your API base URL
  timeout: 10000, // Optional: set a timeout
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

// Optional: Add interceptors for request and response
// apiClient.interceptors.request.use(
//   (config) => {
//     // Add Authorization token if needed
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally, e.g., logout on 401
    if (error.response?.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  }
);

export default apiClient;
