import { axiosInstance } from "../../../utils/axios";


export const requestHandler = async ({ method, url, token, data }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const requestOptions = {
    method,
    url,
    ...(method !== "get" && { data }),
    ...config,
  };

  try {
    const response = await axiosInstance(requestOptions);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(error);
    let errorMessage = "Something went wrong";
    if (error.response) {
      errorMessage = error.response.data;
    } else if (error.request) {
      errorMessage = "No response received";
    } else {
      errorMessage = error.message || "Error setting up the request";
    }
    return {
      success: false,
      message: errorMessage,
    };
  }
};
