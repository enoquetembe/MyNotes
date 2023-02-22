import { useState } from 'react'
import { createContext, useContext } from 'react'

import { api } from  '../services/api'

export const AuthContext = createContext({})

export { useState } from 'react'

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try {
      const response = await api.post('/session', { email, password })
      const {token, user} = response.data

      api.defaults.headers.authorization = `Bear ${token}`
      setData({user, token})

    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else  {
        alert('It was no possible to login')
      }
    }
  }

  return(
    <AuthContext.Provider value={{ signIn, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
