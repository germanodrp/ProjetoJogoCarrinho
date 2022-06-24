import carrinhoImg from '../../assets/carrinhoImg.svg'
import { Container, Content, SectionFruts } from './styles'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import BananaFun from '../../assets/BananaFun.svg'

export function PrimeiroCarrinho() {



  return (
    <Content>
      <Container>
        <img src={carrinhoImg} alt="carrinho de compras" />
      </Container>

      <SectionFruts>
        <img src={Laranja} alt="carrinho de compras" />
      </SectionFruts>


    </Content>
  )
}