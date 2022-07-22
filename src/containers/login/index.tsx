import { Button, Input } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaGithub, FaGitlab, FaGoogle, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { UseLoginController } from './controller'

type Props = {}

export default function LoginContainer({}: Props) {
  const controller = UseLoginController()
  const router = useRouter()
  const { handleSubmit, control } = useForm({})
  const onSubmit = (data: any) => {
    controller.login(data)
  }

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-1/2">
        <div className="w-full p-5">
          <div className="text-left font-bold">
            <span className="text-slate-900">Company</span>Name
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-slate-500 mb-2">Sign in to DMS Doc</h2>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="email"
                        name="email"
                        placeholder="Nhập email"
                        className="bg-gray-100 outline-none text-sm flex-1"
                      />
                    )}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        name="password"
                        placeholder="Nhập password"
                        className="bg-gray-100 outline-none text-sm flex-1"
                      />
                    )}
                  />
                </div>
                <div className="flex justify-between w-64 mb-5"></div>
                <Button
                  htmlType="submit"
                  // onClick={() => saveLocalStore()}
                  className="border-2 border-slate-900 rounded-full px-6 py-0.5 inline-block font-semibold hover:bg-slate-500 hover:text-white"
                >
                  Sign in to account
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
