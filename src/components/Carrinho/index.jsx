import {Container} from './styles'

export function Carrinho({image, alt}) {
  return(
    <Container>
      <img src={image} alt={alt} />
    </Container>
  )
}