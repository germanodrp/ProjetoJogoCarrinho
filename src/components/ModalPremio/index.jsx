import { Modal, Container, Content, Text} from './styles'
import { Prateleira } from '../CarrinhoPrateleira'



export function ModalPremio({ onClose }) {

    // const [isModalVisible, setIsModalVisible] = useState(false)


    const handleOutsideClick = (e) => {

        console.log(e.target.id)
        if (e.target.id === 'Modal') onClose()
    }



    return (

        <Modal id="Modal" onClick={handleOutsideClick}>
          <Text>PARABENS!!! VOCE GANHOU!!!🏆🏆🏆</Text>
        </Modal>
    )
}