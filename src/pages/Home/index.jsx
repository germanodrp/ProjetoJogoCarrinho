
import { Prateleira } from '../../components/Prateleira'
import { PrimeiroCarrinho } from '../../components/PrimeiroCarrinho'
import { SegundoCarrinho } from '../../components/SegundoCarrinho'
import { Container } from './styles'

export function Home() {

  return (

    <Container>
      <PrimeiroCarrinho />
      <Prateleira />
      <SegundoCarrinho />
    </Container>

  )
}