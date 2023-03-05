import { useNavigate } from 'react-router-dom'
import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { useState } from 'react'
import { api } from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links,  setLinks] = useState([])
  const [newLink, setNewLink] = useState('')
  
  const [tags,  setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

   function handleBack() {
     navigate(-1)
   }

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

  async function handleNewNote() {

    if(!title) {
      return alert('Title is required.')
    }

    if(newLink) {
      return alert("You left a link to be added but didn't click on add button. Click the button to add or leave the field empty")
    }

    if(newTag) {
      return alert("You left a tag to be added but didn't click on add button. Click the button to add or leave the field empty.")
    }

    await api.post('/notes', {title, description, tags, links})
    alert("Note created successfully.")

    handleBack()
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <ButtonText title='back' onClick={handleBack}/>
          </header>

          <Input 
            placeholder='Title'
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder='Observations'
            onChange={e => setDescription(e.target.value)}
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

          <Button title='Save' onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  )
}
