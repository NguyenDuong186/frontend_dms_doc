import Head from 'next/head'
import LoginContainer from '../containers/login'

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer />
    </div>
  )
}
