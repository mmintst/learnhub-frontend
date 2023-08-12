import React from 'react'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className="sticky bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="flex justify-between h-16 items-center px-12 font-extrabold text-gray-500">
        <Link to="/" className="text-2xl">
          LearnHub
        </Link>
        <div className="flex gap-8">
          {isLoggedIn ? (
            <>
              <Link to="/create">Create new content</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
