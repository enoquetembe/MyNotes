import { Container, Profile, Logout } from './styles'
import { RiShutDownLine }  from 'react-icons/ri'

export function Header() {
  return(
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/enoquetembe.png" alt="user's pic" />

        <div>
          <span>Welcome,</span>
          <strong>Enoque Tembe</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}