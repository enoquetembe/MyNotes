import { Link } from 'react-router-dom'
import { Container, Form, BackgroundImg } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
  const [email,  setEmail] = useState('')
  const [password,  setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
 
  return(
    <Container>
      <Form>
        <h1>MyNotes</h1>
        <p>Application to save and manage your util links.</p>
        
        <h2>Login</h2>
        <Input 
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder='Password'
          type='password'
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Login' onClick={handleSignIn}/>

        <Link to='/register'>Create an account</Link>
      </Form>

      <BackgroundImg/>
    </Container>
  )
}
