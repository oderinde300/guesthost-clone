import axios from 'axios';

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Replace with your API base URL
  timeout: 100000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
