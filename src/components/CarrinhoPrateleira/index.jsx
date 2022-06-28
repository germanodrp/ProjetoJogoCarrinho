import {
    ButtonClick,
    Content, Container,
    ContainerCarrinho, SectionFruts,
    ContentCarrinho,
    ButtonClick2,
} from "./styles"
import PrateleiraImg from '../../assets/PrateleiraImg.svg'
import BananaFun from '../../assets/BananaFun.svg'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import milk from '../../assets/milk.svg'
import Moranguinho from '../../assets/Moranguinho.svg'
import carrinhoImg from '../../assets/carrinhoImg.svg'
import Uva from '../../assets/Uva.svg'
import PaoFrances from '../../assets/PaoFrances.svg'
import { useState } from "react"
import { ModalPremio } from "../ModalPremio"



export function Prateleira() {

    const [renderizaBanana, setRenderizaBanana] = useState(true)
    const [renderizaCoca, setRenderizaCoca] = useState(true)
    const [renderizaLaranja, setRenderizaLaranja] = useState(true)

    const [renderizaLaranjaCarrinho, setRenderizaLaranjaCarrinho] = useState(false)
    const [renderizaBananaCarrinho, setRenderizaBananaCarrinho] = useState(false)
    const [renderizaCocaColaCarrinho, setRenderizaCocaColaCarrinho] = useState(false)

    const [contador, setContador] = useState(0)

    function verificaID(e) {

        const id = e.target.id

        if (id === 'BananaFun') {
            setRenderizaBanana(true)
            setRenderizaBananaCarrinho(true)
            setContador(contador + 1)
        }
        else if (id === 'CocaCola') {
            setRenderizaCoca(true)
            setRenderizaCocaColaCarrinho(true)
            setContador(contador + 1)

        }
        else if (id === 'Laranja') {
            setRenderizaLaranja(true)
            setRenderizaLaranjaCarrinho(true)
            setContador(contador + 1)

        }

        else {
            alert("Tente novamente")
        }

    }

    return (
        <>
            <ContentCarrinho>
                <ContainerCarrinho>
                    <img src={carrinhoImg} alt="carrinho de compras" />
                </ContainerCarrinho>

                <SectionFruts>
                    {renderizaLaranjaCarrinho ? <img src={Laranja} /> : null}
                </SectionFruts>

                <SectionFruts>
                    {renderizaBananaCarrinho ? <img src={BananaFun} /> : null}
                </SectionFruts>

                <SectionFruts>
                    {renderizaCocaColaCarrinho ? <img src={CocaCola} /> : null}
                </SectionFruts>
            </ContentCarrinho>

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
                    <img src={Uva} id="Uva" />
                </ButtonClick>

                <ButtonClick2 onClick={verificaID}>
                    <img src={Moranguinho} id="Moranguinho" />
                </ButtonClick2>
                <ButtonClick2 onClick={verificaID}>
                    {renderizaLaranja ? <img src={Laranja} id="Laranja" /> : null}
                </ButtonClick2>
                <ButtonClick2 onClick={verificaID}>
                    <img src={PaoFrances} id="PaoFrances" />
                </ButtonClick2>


            </Content>

            {contador === 3 ? <ModalPremio /> : null}


        </>



    )

}