import { Link, Navigate } from "react-router-dom"

import { Alert } from "shared/ui"
import useAlertStore from "shared/ui/Alert/store"

import { RegisteForm } from "features/auth/ui"
import { useAuthStore } from "features/auth"

 
export function RegisterPage () {
  const isAuth = useAuthStore(state => state.isAuth)
  const alert = useAlertStore(state => state.alert)

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Alert {...alert} />
      <div className="text-center mb-9">
        <h1 className="font-semibold text-[32px]">Create an Account</h1>
        <p className="text-[18px] text-secondary">Create a account to continue</p>
      </div>
      <RegisteForm />
      <p className="text-center">
        Already have an account? <Link className="underline text-[#5A8CFF] font-bold" to="/login">Login</Link>
      </p>
    </>
  )
}
