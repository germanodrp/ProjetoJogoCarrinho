import BananaFun from '../../assets/BananaFun.svg'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import milk from '../../assets/milk.svg'
import Moranguinho from '../../assets/Moranguinho.svg'
import PaoFrances from '../../assets/PaoFrances.svg'
import Rosca from '../../assets/Rosca.svg'
import Uva from '../../assets/Uva.svg'
import { Container } from './styles'

export function Frutas() {
    return (
        <Container>
          <img src={BananaFun} id="BananaFun" alt="Imagem de queijo" />
            <img src={CocaCola} id="CocaCola" alt="Imagem de uma CocaCola" />
            <img src={Laranja} id="Laranja" alt="Imagem de uma Laranja" />
            <img src={milk} id="milk" alt="Imagem de um leite" />
            <img src={Moranguinho} id="Moranguinho" alt="Imagem de um Morango" />
            <img src={PaoFrances} id="PaoFrances" alt="Imagem de um Pão Frances" />
            <img src={Rosca} id="Rosca" alt="Imagem de uma Rosca" />
            <img src={Uva} id="Uva" alt="Imagem de uma uva" />
        </Container>
            
    )

}