import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Container, Form, BackgroundImg } from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert('Fill in all fields')
    }
    
    api.post('/users', { name, email, password })
    .then(() => {
      alert('User registered successfully.')
      navigate('/')
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Could not register user.')
      }
    })
  }

  return (
    <Container>
      <BackgroundImg />

      <Form>
        <h1>MyNotes</h1>
        <p>Application to save and manage your util links.</p>

        <h2>Create your account</h2>
        <Input 
          placeholder='Name' 
          type='text' 
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
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

        <Button title='Register' onClick={handleSignUp} />

        <Link to='/'>Back to login</Link>
      </Form>
    </Container>
  )
}
