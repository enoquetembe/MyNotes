import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>MyNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title='All' isActive/></li>
        <li><ButtonText title='react'/></li>
        <li><ButtonText title='node'/></li>
      </Menu>

      <Search>
        <Input 
          placeholder='Search by title'
          icon={FiSearch}
        />
      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus/>
        Create Note
      </NewNote>
    </Container>
  )
}
