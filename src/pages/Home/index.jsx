
import { Ajuda } from '../../components/ButtonAjuda'
import { Prateleira } from '../../components/CarrinhoPrateleira'
import { SegundoCarrinho } from '../../components/SegundoCarrinho'
import { Container, Content } from './styles'

export function Home() {

  return (
    <Content>
      <Container>
        <Prateleira />
        <SegundoCarrinho />
      </Container>

      <Ajuda />

    </Content>

  )
}