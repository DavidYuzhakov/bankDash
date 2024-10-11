import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import showImg from 'shared/assets/icons/password-show.svg'
import hideImg from 'shared/assets/icons/password-hide.svg'
import { Button } from 'shared/ui'
import useAlertStore from 'shared/ui/Alert/store'

import { LoginFormValues } from '../model/types'
import { login } from '../../../shared/api/endpoints/login'
import { AxiosError } from 'axios'
import useAuthStore from '../model/store'

export function LoginForm() {
  const navigate = useNavigate()
  const setIsAuth = useAuthStore(state => state.setIsAuth)
  const [showPassword, setShowPassword] = useState(false)
  const showAlert = useAlertStore((state) => state.showAlert)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async (body) => {
    try {
      const { data } = await login(body)
      showAlert('success', data.message ?? 'The login was completed successfully')
      setIsAuth(true)
      navigate('/')
    } catch (e: unknown) {
      console.log(e)
      if (e instanceof AxiosError) {
        const msg = e.response?.data.message || e.response?.data[0].msg
        if (msg) {
          showAlert('error', msg)
        } else {
          showAlert('error', 'Failed to login, try again later')
        }
      } 
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        className={`${errors?.email ? 'text-[#FE5C73]' : ''}`}
        htmlFor="email"
      >
        Email address:
        <input
          {...register('email', { required: true })}
          id="email"
          className="outline-none border border-[#D8D8D8] bg-[#F1F4F9] rounded-lg w-full p-2 mt-2 mb-5 text-[#A6A6A6]"
          type="email"
        />
      </label>
      <label htmlFor="password">
        <div className="flex justify-between items-center gap-2 mb-2">
          <span className={`${errors?.password ? 'text-[#FE5C73]' : ''}`}>
            Password:
            {errors?.password?.type === 'minLength' && (
              <span className="ml-2 text-[#FE5C73]">
                {errors.password?.message}
              </span>
            )}
          </span>
          <Link className="text-secondary" to="/forgot-password">
            Forgot password?
          </Link>
        </div>
        <div className="relative mb-11">
          <input
            {...register('password', {
              required: 'The field password must be is required!',
              minLength: {
                value: 8,
                message: 'min 8 char',
              },
            })}
            id="password"
            className="outline-none border border-[#D8D8D8] bg-[#F1F4F9] rounded-lg w-full p-2 text-[#A6A6A6] pr-7"
            type={showPassword ? 'text' : 'password'}
          />
          <img
            onClick={() => setShowPassword((prev) => !prev)}
            className="w-5 h-5 absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer"
            src={showPassword ? showImg : hideImg}
            alt="show"
          />
        </div>
      </label>
      <Button type="submit" text="Sign In" />
    </form>
  )
}
