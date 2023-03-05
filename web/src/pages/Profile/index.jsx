import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera  } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, seEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)
  
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    const updatedUser = Object.assign(user, updated)

    await updateProfile({user: updatedUser, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft/>
       </button>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="user's photo" />
          
          <label htmlFor="avatar"> <FiCamera/> </label>
          <input 
            id='avatar'
            type='file'
            onChange={handleChangeAvatar}
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
