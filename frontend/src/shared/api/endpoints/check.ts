import axios from "../axios";

export async function check () { 
  return await axios.get('/auth/check')
}