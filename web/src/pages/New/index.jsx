import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function New() {
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <a href="/">back</a>
          </header>

          <Input 
            placeholder='Title'
          />

          <TextArea 
            placeholder='Observations'
          >

          </TextArea>

          <Section title='Util links'>
            <NoteItem value='github.com'/>
            <NoteItem 
              isNew
              placeholder='New link'
            />
          </Section>

          <Section title='Tags'>
            <div className='tags'>
              <NoteItem value='react'/>
              <NoteItem 
                isNew
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
