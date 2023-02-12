import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Delete note' />

          <h1>Introduction to React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            earum quae non tenetur, totam eveniet hic exercitationem, ipsum
            distinctio similique voluptates magni porro, laborum cupiditate
            recusandae. Quibusdam assumenda itaque, illo recusandae, mollitia
            delectus libero nemo accusamus soluta perspiciatis cum, maiores nam
            ipsa. Quaerat quam autem qui, deserunt fugit nisi ad.
          </p>

          <Section title='Util links'>
            <Links>
              <li>
                <a href='#'>https://github.com/enoquetembe</a>
              </li>
              <li>
                <a href='#'>https://layouts.com</a>
              </li>
            </Links>
          </Section>

          <Section title='Tags'>
            <Tag title='react' />
            <Tag title='javascript' />
          </Section>

          <Button title='Back' />
        </Content>
      </main>
    </Container>
  )
}
