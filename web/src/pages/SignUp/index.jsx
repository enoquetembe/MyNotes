import { Link } from "react-router-dom"

import { Container, Form, BackgroundImg } from "./styles"
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <BackgroundImg />

      <Form>
        <h1>MyNotes</h1>
        <p>Application to save and manage your util links.</p>

        <h2>Create your account</h2>
        <Input 
          placeholder="Name" 
          type="text" 
          icon={FiUser} 
        />
        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail}
        />
        <Input 
          placeholder="Password" 
          type="password" 
          icon={FiLock} 
        />

        <Button title="Register" />

        <Link to='/'>Back to login</Link>
      </Form>
    </Container>
  )
}
