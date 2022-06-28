import { Modal, Container, Content, Button } from './styles'



export function ModalAjuda({ onClose }) {

    const handleOutsideClick = (e) => {

        console.log(e.target.id)
        if (e.target.id === 'Modal') onClose()
    }

    return (

        <Modal id="Modal" onClick={handleOutsideClick}>
            <Container>
                <Button onClick={onClose} />

                <Content>
                    <h1>Instruções</h1><br/>
                    <h2>Selecione a fruta que corresponde ao primeiro carrinho</h2><br/>
                    <h2>Após a escolha selecione as 3 frutas equivalente para finalizar o game</h2>
                </Content>
            </Container>
        </Modal>
    )
}
