import {
    ButtonClick,
    Content, Container,
    ContainerCarrinho, SectionFruts,
    ContentCarrinho,
    Congratulations
} from "./styles"
import PrateleiraImg from '../../assets/PrateleiraImg.svg'
import BananaFun from '../../assets/BananaFun.svg'
import CocaCola from '../../assets/CocaCola.svg'
import Laranja from '../../assets/Laranja.svg'
import milk from '../../assets/milk.svg'
import Moranguinho from '../../assets/Moranguinho.svg'
import { useState } from "react"
import carrinhoImg from '../../assets/carrinhoImg.svg'



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
            setRenderizaBanana(false)
            setRenderizaBananaCarrinho(true)
            setContador(contador + 1)
        }
        else if (id === 'CocaCola') {
            setRenderizaCoca(false)
            setRenderizaCocaColaCarrinho(true)
            setContador(contador + 1)

        }
        else if (id === 'Laranja') {
            setRenderizaLaranja(false)
            setRenderizaLaranjaCarrinho(true)
            setContador(contador + 1)

        }

        else {
            alert("Tente novamente")
        }

    }

    function ReiniciarJogo() {

    }

    return (
        <>
            

            {contador === 3 ? <Congratulations>PARABENS</Congratulations> : null}
           

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
                    {renderizaLaranja ? <img src={Laranja} id="Laranja" /> : null}
                </ButtonClick>

                <ButtonClick onClick={verificaID}>
                    <img src={Moranguinho} id="Moranguinho" />
                </ButtonClick>

                        
            </Content>


        </>



    )

}