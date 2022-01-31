import React, {useState} from "react";
import "./Product.css";
import styled from 'styled-components'
import { ProdPopOut } from "./ProdPopOut/ProdPopOut";
import { GlobalStyle } from "../../../globalStyle/globalStyled";
const Container = styled.div`
display:flex;
height:25vh;

justify-content:center;
align-itemms:center;
width:37vw;
margin-top:1%;
padding:16px 32px;

`;

const ProductButton = styled.div`
min-width:100px;
padding: 16px 32px;
border-radius:2.3vh;
border:2px solid #ccc;
background:#fff;
color:#141414;
font-size:0.73vw;
display:grid;
box-shadow:2px 4px 7px rgba(0 0 0 0.8);
grid-template-areas:"img title"
                    "img price";
grid-template-columns:9vw 1fr;
grid-template-rows: 1fr 9vh;
cursor:pointer;
transition: 0.5s;
&:hover{
  transition-duration: 1s, 2s;
    transform:scale(1.06);
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}
`;


export default function Product(props) {
  const [showPopOut,setShowPopOut] = useState(false)
  const openShowPopOut = () =>{
    setShowPopOut(!showPopOut)
  }
  console.log(props.product)
  return (
<Container>
<ProductButton onClick={openShowPopOut}>
      <h2 className={`product-title ptitle${props.index}`}>
        {props.title}
        {props.product.title}
      </h2>
      <img
        className={`product-img`}
        src={props.product.image}
        alt={props.product.title}
      />
      <h3 className={`product-price`}>Price: {props.product.price}</h3>
    
    </ProductButton>
    <ProdPopOut showPopOut={showPopOut} setShowPopOut={setShowPopOut} product={props.product}/>
    <GlobalStyle />
    </Container>
  );
}
