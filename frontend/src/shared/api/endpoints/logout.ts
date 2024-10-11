import axios from "../axios";

export async function logout () {
  return axios.get('/auth/logout')
}