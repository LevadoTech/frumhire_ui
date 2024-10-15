import axios, { AxiosInstance } from 'axios';

const createApiClient = (baseURL: string, apiKey: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      ApiKey: apiKey, 
      'Content-Type': 'application/json'
    }
  });
};

export default createApiClient;
