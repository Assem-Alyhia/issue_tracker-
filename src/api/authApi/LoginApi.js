import axiosInstance from "../axiosInstance";
import { setToken } from "./tokenManager";
import apiEndpoints from './../apiEndpoints';
import Cookies from 'js-cookie';

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

    Cookies.set('UserId', response.data.user.id);

    setToken(response.data.jwt); 

    return response.data;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error; 
  }
};
