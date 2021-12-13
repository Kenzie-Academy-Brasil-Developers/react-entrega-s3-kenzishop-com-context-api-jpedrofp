import styled from "styled-components"

export const Card = styled.li `
    width: 95%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 20px auto;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 16px -7px rgba(26,110,115,0.58);
-webkit-box-shadow: 0px 0px 16px -7px rgba(26,110,115,0.58);
-moz-box-shadow: 0px 0px 16px -7px rgba(26,110,115,0.58);
@media (min-width: 700px){
        width: 50%;
    }
`

export const Font = styled.p `
    font-size: 1.5rem;
`

export const ProductImg = styled.div `
    text-align: center;

`

export const Img = styled.img `

        width: 260px;
    height: 145px;
    @media (min-width: 600px){
        width: 290px;
    height: 170px;
    }

`

export const Button = styled.button `
margin:5px auto;
    background-color: lightblue;
    border: transparent;
    width: 110px;
    height: 25px;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.0rem;
    :hover{
        filter:brightness(0.8)
    }
    `