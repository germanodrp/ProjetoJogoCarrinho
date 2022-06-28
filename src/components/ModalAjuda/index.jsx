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
                    <h1>INSTRUÇÕES</h1><br/><br/><br/><br/>
                    <h2>Memorize as imagens do carrinho a sua direita</h2><br/><br/>
                    <h2>Clique na prateleira nas imagens correspondentes as do carrinho.</h2><br/><br/>
                    <h2>Selecione as imagens até que os carrinhos fiquem iguais.</h2>
                </Content>
            </Container>
        </Modal>
    )
}
