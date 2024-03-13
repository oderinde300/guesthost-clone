import axios from "axios";

const client = axios.create({
  baseURL: "https://guest_demo.guestsnhost.com/", // Replace with your API base URL
  timeout: 100000, // Adjust the timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
