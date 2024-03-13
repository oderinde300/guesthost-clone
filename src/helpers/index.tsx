import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const baseURL = "https://guest_demo.guestsnhost.com/";
const token = Cookies.get("token");

console.log(token);

export const PostAPICall = (api: string, data: any) => {
  axios
    .post(`${baseURL}${api}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
      toast.success("Successful!");
    })
    .catch((error) => {
      console.log("account response error:", error);
      toast.error("Error Logging in account. Please try again.");
    });
};
