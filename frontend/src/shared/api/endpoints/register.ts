import { RegisterFormValues } from "features/auth/model/types";
import axios from "../axios";

export async function registration (body: RegisterFormValues) {
  return await axios.post('/auth/register', body)
}