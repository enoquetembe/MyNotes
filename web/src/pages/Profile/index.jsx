import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera  } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, seEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  
  async function handleUpdateProfile() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    await updateProfile({user})
  }

  return(
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft/>
       </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/enoquetembe.png" alt="user's photo" />
          
          <label htmlFor="avatar"> <FiCamera/> </label>
          <input 
            id='avatar'
            type='file'
          />
        </Avatar>

        <Input 
          type='text'
          placeholder='Name'
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type='text'
          placeholder='Email'
          icon={FiMail}
          value={email}
          onChange={e => seEmail(e.target.value)}
        />

        <Input 
          type='password'
          placeholder='Old password'
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input 
          type='password'
          placeholder='New password'
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title='Save' onClick={handleUpdateProfile}/>
      </Form>
    </Container>
  )
}
