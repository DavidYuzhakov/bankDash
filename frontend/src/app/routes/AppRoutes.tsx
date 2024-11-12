import { useAuthStore } from "features/auth"
import { HomePage } from "pages/home"
import { LoginPage, RegisterPage } from "pages/login"
import { NotFoundPage } from "pages/not-found"
import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { check } from "shared/api"
import { AuthLayout } from "widgets/auth-layout"
import { MainLayout } from "widgets/main-layout"
import loading from "shared/assets/icons/loading.svg"


export const AppRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth)
  console.log(isAuth)
  const setIsAuth = useAuthStore(state => state.setIsAuth)

  async function checkAuth () {
    try {
      await check()
      console.log(isAuth)
      setIsAuth(true)
    } catch (err) {
      console.log(err)
      setIsAuth(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  if (isAuth === undefined) {
    return (
      <div className="bg-black/50 w-screen h-screen flex justify-center items-center">
        <img className="animate-spin" width={50} src={loading} alt="loading..." />
      </div>
    )
  }

  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="register" element={<RegisterPage />}  />
          <Route path="login" element={<LoginPage />}  />
          <Route path={'*'} element={<Navigate to="register"  />} />
        </Route >
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />}  />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}