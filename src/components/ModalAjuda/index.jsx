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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore eveniet sed laudantium? Aspernatur, consequuntur? At asperiores iusto molestiae, doloribus nisi, sed ipsa commodi, velit vel dolor modi! Aliquam, et?
                </Content>
            </Container>
        </Modal>
    )
}
