
import { Header } from '../../components/Header'
import { PrimeiroCarrinho } from '../../components/PrimeiroCarrinho'
import { SegundoCarrinho } from '../../components/SegundoCarrinho'
import { Container, Footer } from './styles'

export function Home() {

  return (
    <>

      <Header />


      <Container>
        <PrimeiroCarrinho />
        <SegundoCarrinho />
      </Container>

      <Footer>
         Bem vindo(a), Guilherme
      </Footer>
    

    </>
  )
}