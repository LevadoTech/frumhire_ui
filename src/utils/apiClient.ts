import axios, { AxiosInstance } from 'axios';

const createApiClient = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      ApiKey: 'e023f93b-86c8-4e33-8fe7-cb6559645a8e',
      'Content-Type': 'application/json'
    }
  });
};

export default createApiClient;
