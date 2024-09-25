import { axios } from "shared/api"
import { LoginFormValues, ResponseData } from "../model/types"

export const login = async (body: LoginFormValues) => {
  const { data } = await axios.post<ResponseData>('/auth/login', body)
  return data
}