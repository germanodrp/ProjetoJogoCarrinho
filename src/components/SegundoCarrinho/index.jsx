import carrinhoImg from '../../assets/carrinhoImg.svg'
import { Container, SectionFruts, Content } from './styles'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import BananaFun from '../../assets/BananaFun.svg'


export function SegundoCarrinho() {
    return (
        <Content>
            <Container>
                <img src={carrinhoImg} alt="carrinho de compras" />
            </Container>

            <SectionFruts>
                <img src={Laranja} alt="carrinho de compras" />
            </SectionFruts>

            <SectionFruts>
                <img src={CocaCola} alt="carrinho de compras" />
            </SectionFruts>

            <SectionFruts>
                <img src={BananaFun} alt="carrinho de compras" />
            </SectionFruts>
        </Content>




    )


}