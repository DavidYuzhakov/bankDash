import { create } from "zustand";
import { Action, Card, State } from "./types";
import { axios } from "shared/api";
import { AxiosError } from "axios";

const useCardStore = create<State & Action>(set => ({
  loading: false,
  cards: [],
  error: null,
  getCards: async () => {
    set({ loading: true })
    try {
      const result = await axios.get<Card[]>('/card/list')
      // console.log(result)
      set({ cards: result.data })
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log('Failed to get cards', err)
        set({ error: err.response?.data.message })
      } else {
        console.log('Failed to get cards', err)
        set({ error: 'Failed to get cards' })
      }
    } finally {
      set({ loading: false})
    }
  }
}))

export default useCardStore