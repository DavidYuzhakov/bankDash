
import { useAuthStore } from "features/auth/model"
import { HomePage } from "pages/home"
import { LoginPage, RegisterPage } from "pages/login"
import { NotFoundPage } from "pages/not-found"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthLayout } from "widgets/auth-layout"
import { MainLayout } from "widgets/main-layout"

export const AppRoutes = () => {
  const isAuth = useAuthStore((state) => state.isAuth)

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