import carrinhoImg from '../../assets/carrinhoImg.svg'
import { Carrinho } from '../../components/Carrinho/index'
import {Container} from './styles'
export function Home(){

  return (
    <Container>    
        <Carrinho image={carrinhoImg} alt="Carrinho de compras"/>
        <Carrinho image={carrinhoImg} alt="Carrinho de compras"/> 
    </Container>
  )
}