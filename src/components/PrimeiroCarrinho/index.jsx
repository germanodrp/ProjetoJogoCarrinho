import carrinhoImg from '../../assets/carrinhoImg.svg'
import { Container } from './styles'

export function PrimeiroCarrinho() {
  return (
    <Container>
      <img src={carrinhoImg} alt="Carrinho de compras" />
    </Container>
  )
}