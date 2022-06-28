import styled from "styled-components";



// export const Content = styled.div`

// display: flex;
// margin-top: 3rem;

// @media screen and (max-width: 960px) {
//     padding: 0 0;
//   };


// `
export const Container = styled.div`

display: block;
margin-top: 3rem; 
border: 0;
margin: 0;
margin-left: 2rem;

img{
  width: 18.75rem;
  height: 21.75rem;
  margin-top: 112px;
  margin-left: 2.13rem;
  margin-right: -2.5rem;


}

`


export const ButtonClick = styled.button`
  background: #87CEEB;
  margin: 0;
  border: 0;
  align-items: center;
  position: relative;
  right: 13.75rem;
  top: 20px;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    background: #4682B4
    
;
  }
  


`

export const Content = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`

export const ContentCarrinho = styled.div`

display: flex;
align-items: center;
justify-content: center;

`

export const ContainerCarrinho = styled.div`

display: flex;
margin-top: 5.5rem;
margin-right: 7rem;

    img {
    width: 14.063rem;
    height: 14.063rem;
    display: flex;
}

`

export const SectionFruts = styled.div`

position: relative;
right: 17.30rem;
top: 19px;
`



export const Congratulations = styled.h1`
 color: white;
 height: 100px;
 width: 200px;
 align-items: center;
`