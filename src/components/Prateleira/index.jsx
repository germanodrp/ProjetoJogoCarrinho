import { ButtonClick, Content, Container } from "./styles"
import PrateleiraImg from '../../assets/PrateleiraImg.svg'
import BananaFun from '../../assets/BananaFun.svg'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import milk from '../../assets/milk.svg'
import Moranguinho from '../../assets/Moranguinho.svg'
import { useState } from "react"


export function Prateleira() {

    const [renderizaBanana, setRenderizaBanana] = useState(false)

    function verificaID(imagem) {

        const id = imagem.target.id

        if (id === 'BananaFun') {
            alert('Parabens vc acertou 😁')
        } else {
            alert('Tente novamente 😌')
        }
    }
    return (
        <Content>

            <Container>
                <img src={PrateleiraImg} id="Prateleira" alt="Prateleira com Frutas" />
            </Container>

            <ButtonClick onClick={verificaID}>
                <img src={BananaFun} id="BananaFun" alt="Imagem de queijo" />
            </ButtonClick>

            <ButtonClick onClick={verificaID}>
                <img src={CocaCola} id="CocaCola" alt="Imagem de queijo" />
            </ButtonClick>

            <ButtonClick onClick={verificaID}>
                <img src={Laranja} id="Laranja" alt="Imagem de queijo" />
            </ButtonClick>

            <ButtonClick onClick={verificaID}>
                <img src={milk} id="milk" alt="Imagem de queijo" />
            </ButtonClick>


            <ButtonClick onClick={verificaID}>
                <img src={Moranguinho} id="Moranguinho" alt="Imagem de queijo" />
            </ButtonClick>




        </Content>
    )

}