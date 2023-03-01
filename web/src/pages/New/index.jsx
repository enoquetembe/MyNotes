import { Link } from 'react-router-dom'
import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { useState } from 'react'

export function New() {
  const [links,  setLinks] = useState([])
  const [newLink, setNewLink] = useState('')
  
  const [tags,  setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(linkToDelete) {
    setLinks(prevState => prevState.filter(link => link !== linkToDelete))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(tagToRemove) {
    setTags(prevState => prevState.filter(tag => tag !== tagToRemove))
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <Link to='/'>back</Link>
          </header>

          <Input 
            placeholder='Title'
          />

          <TextArea 
            placeholder='Observations'
          >

          </TextArea>

          <Section title='Util links'>
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }

            <NoteItem 
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              placeholder='New link'
            />
          </Section>

          <Section title='Tags'>
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem 
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
                placeholder='New tag'
              />
            </div>
          </Section>

          <Button title='Save'/>
        </Form>
      </main>
    </Container>
  )
}
