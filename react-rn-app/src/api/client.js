import axios from "axios";
import axiosRetry from "axios-retry";

export const apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  shouldResetTimeout: true,
  retryCondition: (error) => {
    const s = error.response?.status;
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || s === 429;
  },
});
