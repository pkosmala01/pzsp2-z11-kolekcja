import axios from "axios";
import { API, ENDPOINT } from "../untils/endpoint";

export const AuthService = {
  async login (username: string, password: string) {
    const responce = await axios.post(API + ENDPOINT.login, new URLSearchParams({username, password}),
    {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      withCredentials: true
    });
    return responce.data;
  }
};