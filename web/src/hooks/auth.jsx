import { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

export { useState, useEffect } from 'react'

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password })
      const { token, user } = response.data

      api.defaults.headers.common['Authorization'] = `Bear ${token}`
      setData({ user, token })

      localStorage.setItem('@mynotes:user', JSON.stringify(user))
      localStorage.setItem('@mynotes:token', token)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('It was no possible to login')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@mynotes:user')
    localStorage.removeItem('@mynotes:token')
    
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if(avatarFile) {
        const fileForm = new FormData()
        fileForm.append('avatar', avatarFile)

        const response = await api.patch('users/avatar', fileForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@mynotes:user', JSON.stringify(user))
      
      setData({user, token: data.token})

      alert('Profile updated.')

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('It was not possible to update profile.')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@mynotes:user')
    const token = localStorage.getItem('@mynotes:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bear ${token}`
      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
