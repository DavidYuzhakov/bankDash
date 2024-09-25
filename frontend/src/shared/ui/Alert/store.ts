import { create } from "zustand"

interface AlertState {
  alert: {
    type: 'success' | 'error'
    text: string
    visible: boolean
  }
  showAlert: (type: 'success' | 'error', text: string) => void
}

const useAlertStore = create<AlertState>((set) => ({
  alert: {
    type: 'success',
    text: '',
    visible: false
  },
  showAlert: (type, text) => {
    set({ alert: { type, text, visible: true }}),
    setTimeout(() => set(state => ({ alert: { ...state.alert, visible: false } })), 2000)
  }
}))

export default useAlertStore