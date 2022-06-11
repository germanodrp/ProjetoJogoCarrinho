import salgadin from '../../assets/salgadin.svg'
import queijo from '../../assets/queijo.svg'


// export const produtosTypes = {

//     image: {
//         source: salgadin,
//     }

// }

export function Produto() {
    return (
        <>
            <img src={queijo} alt="Imagem de queijo" />
            <img src={salgadin} alt="Imagem de salgadinho" />
        </>
    )

}