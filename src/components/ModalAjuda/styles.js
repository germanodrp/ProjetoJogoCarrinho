import styled from "styled-components";



export const Modal = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 10;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
`



export const Container = styled.div`
    background-color: #6495ED;
    width: 50%;
    height: 50%;
    color: #000;
    border-radius: 8px;
    border-color: #87CEEB;
    border: 4px solid;

`


export const Button = styled.button`
    background-color: transparent;
    outline: none;
    width: 45px;
    height: 30px;
    border: none;
    right: calc(-104% + 80px);
    cursor: pointer;
    top: 9px;
    display: flex;
    position: relative;
    align-items: center;

    &::before,
    &::after{
        content: '' ;
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
    }

    &::before{
        transform: rotate(45deg);
    }
    &::after{
        transform: rotate(-45deg);
    }

    

`


export const Content = styled.div`
margin-top: 10px;
text-align: center;
font-weight: bold;

`