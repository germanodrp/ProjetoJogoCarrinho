import { useState } from "react"
import { ModalAjuda } from "../ModalAjuda"
import { Button } from './styles'
import { Question } from 'phosphor-react'


export function Ajuda() {


    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <div>
            <Button onClick={() => setIsModalVisible(true)}>
                <Question
                    size={32}
                    height={60}
                    width={60}
                />

            </Button>
            {isModalVisible ?
                <ModalAjuda
                    onClose={() => setIsModalVisible(false)}
                />
                : null}

        </div>
    )
}