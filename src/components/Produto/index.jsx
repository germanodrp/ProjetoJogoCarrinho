import PrateleiraImg from '../../assets/PrateleiraImg.svg'
import { Container } from './styles'



export function Produto() {
    return (
        <>
            <Container>
                <img src={PrateleiraImg} id="Prateleira" alt="Prateleira com Frutas" />
            </Container>
        </>
    )
}