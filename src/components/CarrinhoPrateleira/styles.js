import styled from "styled-components";



// export const Content = styled.div`

// display: flex;
// margin-top: 3rem;

// @media screen and (max-width: 960px) {
//     padding: 0 0;
//   };


// `
export const Container = styled.div`

display: flex;
margin-top: 7.5rem;

img{
  width: 20rem;
  height: 20rem;

}

`


export const ButtonClick = styled.button`
  background: #87CEEB;
  margin: 5px;
  border: 0;
  align-items: center;
  position: relative;
  right: 17rem;
  top: 20px;
  border-radius: 3px;
  cursor: pointer;

  &:hover{
    background: #4682B4;
  }
  
`

export const ButtonClick2 = styled.button`
  background: #87CEEB;
  margin: 5px;
  border: 0;
  align-items: center;
  position: relative;
  right: 29rem;
  top: 135px;
  border-radius: 3px;
  cursor: pointer;

  &:hover{
    background: #4682B4;
  }
`

export const Content = styled.div`

  display: flex;
  align-items: center;


  width: 20rem;
  height: 20rem;
`

export const ContentCarrinho = styled.div`

display: flex;
align-items: center;
justify-content: center;

width: 20rem;
height: 20rem;
margin-top: 50px;

`

export const ContainerCarrinho = styled.div`

display: flex;

    img {
    width: 14.063rem;
    height: 14.063rem;
    display: flex;
}

`

export const SectionFruts = styled.div`

position: relative;
right: 10.5rem;
top: -20px;
`

