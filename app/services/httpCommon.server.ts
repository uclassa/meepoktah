import axios from "axios";

const DJANGO_API = process.env.VITE_DJANGO_API;

/*
  Axios instance where we will call HTTP methods from.
  Import into service file before writing request functions.
*/
export default axios.create({
  baseURL: DJANGO_API,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});
