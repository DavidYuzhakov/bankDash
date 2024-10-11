import axios from "../axios";

export async function refreshToken () {
  return await axios.get('/auth/refresh')
}