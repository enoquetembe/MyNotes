import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Profile, Logout } from './styles'
import { RiShutDownLine }  from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

export function Header() {
  const { signOut, user } =  useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarURL} alt="user's pic" />

        <div>
          <span>Welcome,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine onClick={signOut} />
      </Logout>
    </Container>
  )
}