import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import Create from './pages/Create'
import Register from './pages/Register'
import Edit from './pages/Edit'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guards/GuardedRoute'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/create" element={<Create />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
