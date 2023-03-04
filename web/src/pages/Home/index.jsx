import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  function handleSelectedTags(tagName) {
    const isAlreadySelected = selectedTags.includes(tagName)

    if(isAlreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {
      setSelectedTags(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  return(
    <Container>
      <Brand>
        <h1>MyNotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li>
           <ButtonText 
              title='All' 
              isActive={selectedTags.length === 0}
           />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}
                onClick={() => handleSelectedTags(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder='Search by title'
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title='My notes'>
         <Note data={{
          title: 'Introduction to React',
          tags: [
            {id: 1, name: 'react'},
            {id: 2, name: 'javascript'}
          ]
         }}/>
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus/>
        Create Note
      </NewNote>
    </Container>
  )
}
