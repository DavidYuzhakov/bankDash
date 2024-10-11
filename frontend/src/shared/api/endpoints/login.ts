import { LoginFormValues } from "features/auth/model/types";
import axios from "../axios";

export async function login (body: LoginFormValues) {
  return await axios.post('/auth/login', body)
}