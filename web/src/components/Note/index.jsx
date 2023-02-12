import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags && 
        <footer>
          {data.tags.map(tag => <Tag key={tag.name} title={tag.name}/>)}
        </footer>
      }
    </Container>
  )
}
