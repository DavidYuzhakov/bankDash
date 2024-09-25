export interface LoginFormValues {
  email: string
  password: string
}

export interface RegisterFormValues {
  email: string
  fullName: string
  password: string
  checkbox: boolean
}

export interface ResponseData {
  userId: string
  token: string
}

export type State = {
  isAuth: boolean
}

export type Action = {
  login: (token: string) => void
  logout: () => void
}