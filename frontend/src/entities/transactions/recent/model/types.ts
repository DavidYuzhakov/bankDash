export type RecentTransaction = {
  type: 'card' | 'paypal' | 'other'
  transfer: number
  recipient: string
  date: Date
}

export type State = {
  loading: boolean
  transactions: RecentTransaction[]
  error: string | null
}

export type Action = {
  getRecent: () => void
}