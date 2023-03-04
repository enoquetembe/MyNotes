import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { useNavigate } from 'react-router-dom'
import { FiPlus, FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [search, setSearch] = useState('')
  const [notes, setNote] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const navigate = useNavigate()
  function handleSelectedTags(tagName) {
    if(tagName === 'All') {
      return setSelectedTags([])
    }

    const isAlreadySelected = selectedTags.includes(tagName)

    if(isAlreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {
      setSelectedTags(prevState => [...prevState, tagName])
    }
  }

  function handleOpenNoteDetails(id) {
    navigate(`details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])
  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNote(response.data)
    }

    fetchNotes()
  }, [selectedTags, search])

  return (
    <Container>
      <Brand>
        <h1>MyNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="All"
            isActive={selectedTags.length === 0}
            onClick={() => handleSelectedTags("All")}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleSelectedTags(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Search by title"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes">
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleOpenNoteDetails(note.id)}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create Note
      </NewNote>
    </Container>
  )
}
