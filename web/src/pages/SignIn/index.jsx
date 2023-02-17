import { Link } from 'react-router-dom'
import { Container, Form, BackgroundImg } from './styles'
import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
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
        />
        <Input 
        placeholder='Password'
        type='password'
        icon={FiLock}
        />

        <Button title='Login'/>

        <Link to='/register'>Create an account</Link>
      </Form>

      <BackgroundImg/>
    </Container>
  )
}
