import React, { useState } from 'react'
import { host } from '../constant/host'

const Register = () => {
  const [newUsername, setNewUsername] = useState('')
  const [newName, setNewName] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${host}/user`, {
        method: 'POST',
        body: JSON.stringify({
          username: newUsername,
          name: newName,
          password: newPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
      const data = await res.json()

      console.log(data)
    } catch (err) {
      console.log(err)
    }

    setNewUsername('')
    setNewPassword('')
    setNewName('')
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
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1.5"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />

        <label className="block mb-2 text-2xl font-bold text-gray-500">Name</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1.5"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />

        <label className="block mb-2 text-2xl font-bold text-gray-500">Password</label>
        <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-gray-500 focus:border-gray-500 block w-1/2 p-1.5"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="submit"
          className="border border-gray-300 bg-gray-300 text-white p-1 rounded-lg hover:bg-gray-500 my-4 text-lg"
        />
      </form>
    </div>
  )
}

export default Register
