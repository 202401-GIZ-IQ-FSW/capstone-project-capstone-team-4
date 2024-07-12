import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});

instance.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (response.config.url === "/login") {
      toast.success("Login successful", {
        position: "bottom-right",
      });
    }

    return response;
  },
  function (error) {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        toast.error("Unauthorized access. Please log in", {
          position: "bottom-right",
        });
      } else if (status === 419) {
        toast.error("Your session has expired. Please log in again", {
          position: "bottom-right",
        });
      } else if (status === 409) {
        toast.error(
          "An error occurred due to a conflict in the request (HTTP status code: 409). Please review and adjust your request accordingly"
        );
      }
    } else {
      toast.error("Network error. Please try again later");
    }

    return Promise.reject(error);
  }
);

export default instance;
