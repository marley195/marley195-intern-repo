import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    Accept: "*/*",
  },
});

instance.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving auth token:", error);
    }

    return config; // Return modified config
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export const withCancel = () => {
  const controller = new AbortController();
  return {
    signal: controller.signal,
    cancel: (reason = "Cancelled by client") => controller.abort(reason),
  };
};

// simpler testPost
export async function testPost(endpoint, body = {}, query = {}) {
  const { signal } = withCancel();

  try {
    const res = await api.post(endpoint, body, { params: query, signal });

    // If API tells us to redirect, go there
    if (res?.data?.redirectTo) {
      window.location.assign(res.data.redirectTo);
      return;
    }

    // Otherwise just return the response data
    return res.data;
  } catch (err) {
    if (err.name === "CanceledError") {
      console.log("Request was canceled");
      return;
    }

    console.error("API request failed:", err.message);
    throw err; // rethrow if caller wants to handle it
  }
}
