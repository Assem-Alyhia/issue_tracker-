import { clearToken } from "./tokenManager";

export const logout = () => {
  try {
    clearToken(); 
    console.log("User logged out successfully");

    window.location.href = "/login"; 

  } catch (error) {
    console.error("Logout Error:", error.message);
    throw error;
  }
};
