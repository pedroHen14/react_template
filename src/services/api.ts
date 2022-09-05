import axios from "axios";
import { getToken } from "./storage";

export const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Authorization': getToken() || ''
  }
})