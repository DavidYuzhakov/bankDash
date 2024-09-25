import { useState } from "react"
import { AxiosError } from "axios"
import { Link, useNavigate } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"

import useAlertStore from "shared/ui/Alert/store"
import { Button } from "shared/ui"
import showImg from "shared/assets/icons/password-show.svg"
import hideImg from "shared/assets/icons/password-hide.svg"

import { useAuthStore } from "../model"
import { RegisterFormValues } from "../model/types"
import { registration } from "../api/register"

export function RegisteForm() {
  const navigate = useNavigate()
  const showAlert = useAlertStore((state) => state.showAlert)
  const login = useAuthStore(state => state.login)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: 'onBlur',
    defaultValues: {
      checkbox: true,
      email: 'test@gmail.com',
      fullName: 'Vasya',
      password: '12345678',
    },
  })

  const onSubmit: SubmitHandler<RegisterFormValues> = async (body: RegisterFormValues) => {
    try {
      const { token } = await registration(body)
      login(token)
      showAlert('success', 'The account has been created')
      navigate('/')
    } catch (e: unknown) {
      console.log(e)
      if (e instanceof AxiosError) {
        const errorMsg = e.response?.data[0]?.msg || e.response?.data.message
        if (errorMsg) {
          showAlert('error', errorMsg)
        } else {
          showAlert('error', 'Failed to register, try again later')
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
      <label
        className={`${errors?.fullName ? 'text-[#FE5C73]' : ''}`}
        htmlFor="fullName"
      >
        Full Name:
        {errors?.fullName?.type === 'minLength' && (
          <span className="ml-2 text-[#FE5C73]">
            {errors.fullName?.message}
          </span>
        )}
        <input
          {...register('fullName', {
            required: 'The field fullName must be is required!',
            minLength: {
              value: 5,
              message: 'min 5 char',
            },
          })}
          id="fullName"
          className="outline-none border border-[#D8D8D8] bg-[#F1F4F9] rounded-lg w-full p-2 mt-2 mb-5 text-[#A6A6A6]"
          type="text"
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
        <div className="relative mb-5">
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
      <div className="checkbox">
        <input
          {...register('checkbox', { required: true })}
          type="checkbox"
          id="accepting"
          className={`${errors?.checkbox ? 'error' : ''}`}
        />
        <label htmlFor="accepting">I accept terms and conditions</label>
      </div>

      <Button type="submit" text="Sign Up" />
    </form>
  )
}
