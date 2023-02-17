import { Link } from 'react-router-dom'

import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera  } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
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
        />

        <Input 
          type='text'
          placeholder='Email'
          icon={FiMail}
        />

        <Input 
          type='password'
          placeholder='Old password'
          icon={FiLock}
        />

        <Input 
          type='password'
          placeholder='New password'
          icon={FiLock}
        />

        <Button title='Save'/>
      </Form>
    </Container>
  )
}
