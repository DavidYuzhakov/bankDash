import { create } from "zustand";
import { Action, State } from "./types";

const useAuthStore = create<Action & State>((set) => ({
  isAuth: Boolean(localStorage.getItem('token')),
  login: (token: string) => {
    localStorage.setItem('token', token),
    set({ isAuth: true })
  },
  logout: () => {
    localStorage.removeItem('token')
    set({ isAuth: false })
  }
}))

export default useAuthStore