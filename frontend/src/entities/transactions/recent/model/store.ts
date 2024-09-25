import { create } from "zustand";
import { Action, State } from "./types";
import { AxiosError } from "axios";
import axios from "shared/api/axios"

const useRecentTransStore = create<State & Action>(set => ({
  error: null,
  loading: false,
  transactions: [],
  getRecent: async () => {
    try {
      set({ loading: true})
      const { data } = await axios.get('/transactions/recent')
      set({ transactions: data })
    } catch (err) {
      if (err instanceof AxiosError) {
        set({ error: err.response?.data.message })
      } else {
        set({ error: 'Failed to get recent transactions'})
      }
    } finally {
      set({ loading: false })
    }
  }
}))

export default useRecentTransStore