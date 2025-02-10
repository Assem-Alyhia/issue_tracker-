import axiosInstance from "../axiosInstance";
import { setToken } from "./tokenManager";
import apiEndpoints from "./../apiEndpoints";

export const signUp = async (
  username,
  email,
  password,
) => {
  try {
    const response = await axiosInstance.post(apiEndpoints.register, {
      username,
      email,
      password,
    });

    console.log("Sign Up Response:", response.data);

    if (response.data.status === "failed") {
      throw new Error(response.data.message);
    }

    return login(username, password);
  } catch (error) {
    console.error("Sign Up Error:", error.message);
    throw error;
  }
};

export const login = async (identifier, password) => {
  try {
    const response = await axiosInstance.post(apiEndpoints.login, {
      identifier,
      password,
    });
    console.log("Login Response:", response.data);

    if (response.data.status === "failed") {
      throw new Error(response.data.message);
    }

    setToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};
