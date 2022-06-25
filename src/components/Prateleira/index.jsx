import { ButtonClick, Content, Container } from "./styles"
import PrateleiraImg from '../../assets/PrateleiraImg.svg'
import BananaFun from '../../assets/BananaFun.svg'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import milk from '../../assets/milk.svg'
import Moranguinho from '../../assets/Moranguinho.svg'
import { useState } from "react"


export function Prateleira() {

    const [renderizaBanana, setRenderizaBanana] = useState(true)
    const [renderizaCoca, setRenderizaCoca] = useState(true)
    const [renderizaLaranja, setRenderizaLaranja] = useState(true)

    function verificaID(e) {

        const id = e.target.id

        if (id === 'BananaFun') {
            setRenderizaBanana(false)

        }
        if (id === 'CocaCola') {
            setRenderizaCoca(false)
        }
        if (id === 'Laranja') {
            setRenderizaLaranja(false)
        }

    }
    return (
        <Content>

            <Container>
                <img src={PrateleiraImg} id="Prateleira" alt="Prateleira com Frutas" />
            </Container>

            <ButtonClick onClick={verificaID}>
                {renderizaBanana ?
                    <img src={BananaFun} id="BananaFun" /> : null}
            </ButtonClick>

            <ButtonClick onClick={verificaID}>
                {renderizaCoca ? <img src={CocaCola} id="CocaCola" /> : null}
            </ButtonClick>


            <ButtonClick onClick={verificaID}>
                <img src={milk} id="milk" />
            </ButtonClick>


            <ButtonClick onClick={verificaID}>
                {renderizaLaranja ? <img src={Laranja} id="Laranja" /> : null}
            </ButtonClick>

            <ButtonClick onClick={verificaID}>
                <img src={Moranguinho} id="Moranguinho" />
            </ButtonClick>




        </Content>
    )

}