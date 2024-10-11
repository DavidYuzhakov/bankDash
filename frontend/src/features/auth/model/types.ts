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

export type State = {
  isAuth: boolean | undefined
}

export type Action = {
  setIsAuth: (value: boolean) => void
}
