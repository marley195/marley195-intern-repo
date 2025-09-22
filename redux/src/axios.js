import axios from "axios";
import axiosRetry from "axios-retry";

async function fetchData() {
  try {
    const response = await apiClient.get("https://api.example.com/data");
    console.log("Data Fetched Successfully", response.data);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      throw error;
    }
  }
}

export default apiClient;
