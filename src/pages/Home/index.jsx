
import { Ajuda } from '../../components/ButtonAjuda'
import { Prateleira } from '../../components/CarrinhoPrateleira'
import { ModalPremio } from '../../components/ModalPremio'
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

      {/* <ModalPremio /> */}

    </Content>

  )
}