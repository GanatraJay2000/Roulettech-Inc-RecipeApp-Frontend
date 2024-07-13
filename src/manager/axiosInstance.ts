// eslint-disable-next-line max-classes-per-file
import axios from "axios";
import GLOBAL from "../config/constants/global";

export const axiosInstance = axios.create({
  baseURL: GLOBAL.API_URL,
  headers: {
    Accept: "application/json",
  },
});
