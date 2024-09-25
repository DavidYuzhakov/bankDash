export interface Card {
  number: string
  balance: number
  validThru: Date
  holder: string
}

export type State = {
  loading: boolean
  cards: Card[]
  error: string | null
}

export type Action = {
  getCards: () => void
}