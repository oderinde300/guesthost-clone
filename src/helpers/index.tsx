import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const baseUrl = "https://guest_demo.guestsnhost.com/";
const token = Cookies.get("token");

export const PostAPICall = (api: string, data: any) => {
  console.log(token);

  axios
    .post(`${baseUrl}${api}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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

const callAPI = async (
  url: string,
  method: string,
  body: any,
  headers: any = {
    "Content-Type": "application/json",
  },
  base?: boolean
) => {
  try {
    const myUrl = base ? url : baseUrl + url;
    console.log(myUrl);
    const response = await axios({
      url: `${myUrl}`,
      method,
      headers: {
        ...headers,
        // Add any additional headers if needed
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

export default callAPI;
