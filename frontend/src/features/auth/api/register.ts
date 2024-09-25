import { axios } from "shared/api";
import { RegisterFormValues, ResponseData } from "../model/types";

export async function registration (body: RegisterFormValues) {
  const { data } = await axios.post<ResponseData>('/auth/register', body)
  return data
}