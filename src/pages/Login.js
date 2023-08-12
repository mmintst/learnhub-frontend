import React, { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(usernameInput, passwordInput)

      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 border-4 border-gray-500 rounded-lg w-1/3 m-10 py-10 bg-gray-100 drop-shadow-2xl"
      >
        <label className="block mb-2 text-2xl font-bold text-gray-500">Username</label>
        <input
          type="text"
          onChange={(e) => setUsernameInput(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1.5"
        />

        <label className="block mb-2 text-2xl font-bold text-gray-500">Password</label>
        <input
          type="Password"
          onChange={(e) => setPasswordInput(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1.5"
        />

        <input
          type="submit"
          value="Login"
          className="border border-gray-300 bg-gray-300 text-white p-1 rounded-lg hover:bg-gray-500 my-4 text-lg"
        />
      </form>
    </div>
  )
}

export default Login
