import axios, { AxiosInstance } from "axios";
import { backendBaseUrl } from "../config";
import { refreshToken } from "./endpoints/refresh";

const instance: AxiosInstance = axios.create({
  baseURL: backendBaseUrl,
  withCredentials: true
})


instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalRequest = err.config
    if ((err.response?.status === 403 || err.response?.status === 401) && !originalRequest._retry)  {
      originalRequest._retry = true
      try {
        await refreshToken()
        return await instance(originalRequest)
      } catch (tokenError) {
        console.log('Token refresh failed', tokenError)
        return Promise.reject(tokenError)
      }
    }
  }
)


export default instance