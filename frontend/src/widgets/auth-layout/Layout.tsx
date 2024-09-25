import { Navigate, Outlet, useLocation } from "react-router-dom"

function AuthLayout () {
  const location = useLocation()

  if (location.pathname === '/') {
    return <Navigate to={'/register'} />
  } 

  return (
    <div className='bg-auth-bg bg-cover bg-no-repeat bg-center w-screen h-screen flex justify-center items-center'>
      <div className="bg-white px-12 py-12 rounded-3xl w-full max-w-[530px]">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
