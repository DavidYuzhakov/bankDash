import { Link, Navigate } from "react-router-dom"
import { LoginForm } from "../../../features/auth/ui"
import { Alert } from "../../../shared/ui"
import { useAuthStore } from "../../../features/auth/model"
import useAlertStore from "../../../shared/ui/Alert/store"

export function LoginPage () {
  const isAuth = useAuthStore(state => state.isAuth)
  const alert = useAlertStore(state => state.alert)
  
  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Alert {...alert} />
      <div className="text-center mb-9">
        <h1 className="font-semibold text-[32px]">Login to Account</h1>
        <p className="text-[18px] text-secondary">Please enter your email and password to continue</p>
      </div>
      <LoginForm />
      <p className="text-center">
        Don't have an account? <Link className="underline text-[#5A8CFF] font-bold" to="/register">Create Account</Link>
      </p>
    </>
  )
}
