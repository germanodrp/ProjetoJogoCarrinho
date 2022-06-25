import carrinhoImg from '../../assets/carrinhoImg.svg'
import { Container, Content, SectionFruts } from './styles'

import Laranja from '../../assets/Laranja.svg'
import { useState } from 'react'




export function PrimeiroCarrinho() {

  const [fruta, setFruta] = useState(false)

  return (
    <Content>
      <Container>
        <img src={carrinhoImg} alt="carrinho de compras" />
      </Container>

      <SectionFruts>
        {fruta ? <img src={Laranja} /> : null}
      </SectionFruts>


    </Content>
  )
}