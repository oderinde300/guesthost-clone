// authService.ts
import { Login } from "@/actions/authentication";
import { LoginInterface } from "@/interfaces/auth";
import Cookies from "js-cookie";

const API_URL = "https://guest_demo.guestsnhost.com/"; // Replace with your API endpoint

const authService = {
  login: async (credentials: LoginInterface): Promise<string> => {
    try {
      const response = await Login(credentials);

      const access_token = response?.token;
      localStorage.setItem("token", access_token);
      console.log(access_token);
      // Save token in cookies or localStorage
      Cookies.set("token", access_token);
      // localStorage.setItem('token', token);
      return access_token;
    } catch (error) {
      throw error;
    }
  },

  logout: (): void => {
    // Remove token from cookies or localStorage
    Cookies.remove("token");
    window.location.href = "/login";

    // localStorage.removeItem('token');
  },

  isAuthenticated: (): boolean => {
    // Check if token exists in cookies or localStorage
    return !!Cookies.get("token");
    // return !!localStorage.getItem('token');
  },
};

export default authService;
