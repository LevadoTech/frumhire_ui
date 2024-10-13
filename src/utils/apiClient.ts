import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://frumhire-e18655fb99f3.herokuapp.com/api/', // Base API URL
  headers: {
    ApiKey: 'e023f93b-86c8-4e33-8fe7-cb6559645a8e', // Default API key
    'Content-Type': 'application/json' // Default content type
  }
});

export default apiClient;
