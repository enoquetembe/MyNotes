import { Container, Links, Content } from './styles'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate  = useNavigate()

  async function handleDeleteNote() {
    const confirm = window.confirm('Are you sure you want to delete this note?')
    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }
  
  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title='Delete note' onClick={handleDeleteNote}/>

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title='Util links'>
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target='_blank'>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title='Tags'>
                {data.tags.map((tag) => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                   />
                ))}
              </Section>
            )}

            <Button title='Back' onClick={handleBack}/>
          </Content>
        </main>
      )}
    </Container>
  )
}
