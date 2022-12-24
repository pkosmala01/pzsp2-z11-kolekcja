import Cookie  from "js-cookie";
import axios from "axios";
import { API } from "./endpoint";

const authClient = axios.create({
  baseURL: API,
  headers: {
    Authorization: `Bearer ${Cookie.get("accessToken")}`,
  }
});

export default authClient