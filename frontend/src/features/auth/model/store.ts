import { create } from "zustand";
import { Action, State } from "./types";

const useAuthStore = create<Action & State>((set) => ({
  isAuth: undefined,
  setIsAuth: (value) => set({ isAuth: value })
}))

export default useAuthStore