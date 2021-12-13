
  
import styled from "styled-components"


export const Header = styled.div `
padding:10px;
height: 65px;
    display: flex;
    flex-direction: column;
    text-align:center;
    justify-content:center;
    align-text:center;
    text-shadow: 2px 2px 2px rgba(134,133,133,0.6);
   color: darkbrey;
    margin-bottom:25px;
    font-size: 22px;
    background: ##009491;
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Playfair+Display+SC&display=swap');
    font-family: 'Playfair Display SC', serif;
    box-shadow: 0px 0px 59px 5px rgba(12,54,117,0.62);
    -webkit-box-shadow: 0px 0px 59px 5px rgba(12,54,117,0.62);
    -moz-box-shadow: 0px 0px 59px 5px rgba(12,54,117,0.62);

`

export const Main = styled.div `
    width: 80%;
    margin: auto;
        border-radius: 10px;
    @media (min-width: 700px){
        width: 90%;
    }
`

export const Ul = styled.ul `
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #F5F5F5;
    @media (min-width: 700px){
     
    }
    
`

export const Button = styled.button `
    width:35px;
    height: 30px;
    border-radius: 5px;
    border: transparent;
    position: absolute;
    top:1%;
    right:4%;
    cursor: pointer;
    @media (min-width: 700px){
        width:105px;
    height: 30px;
    }
    :hover{
        border: 1px solid black;
    }

`
