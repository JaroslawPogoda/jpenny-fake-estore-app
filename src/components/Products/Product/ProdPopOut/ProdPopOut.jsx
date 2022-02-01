import React,{useContext, useState} from "react";
import styled from "styled-components";
import{ MdClose} from 'react-icons/md'

import {CartStateContext} from '../../../Layout'

const Background = styled.div`
  width: 100%;
  heights: 100%;
  
  position: absolute;
  display: flex;
  justify-content: center;
  aligh-item: center;
`;
const ProductsWrapper = styled.div`
  padding:20px 10px 20px 10px;
  width: 800px;
  height: 500px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
const ProductImg = styled.img`
  width: 300px;
  height: 460px;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: cover;
`;
const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
const CloseProductButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ProdPopOut = (props) => {
  const value= useContext(CartStateContext)
  const [quantity,setQuantity] = useState(1)
  const handleAddToCart =(event)=>{
    value.dispatchCart({type: 'ADD',payload:{product:props.product,quantity}})
  }
  const handleselectProductquantity= (event)=>{
    setQuantity(event.target.value)
    console.log("this be a value" +event.target.value)
  }
  return (
    <>
      {props.showPopOut ? (
        <Background>
          <ProductsWrapper>
            <ProductImg
              src={(props.product.image)}
              alt={props.product.title}
            />
            <ProductContent>
              <h2 className={`product-title`}>
                {props.title}
                {props.product.title}
              </h2>
              <h3 className="product-description">{props.product.description}</h3>
              <div className="product-price">
                <h3 className={`product-title ptitleprops.index`}>Price: {props.product.price}</h3>
              <div><h4>Quantity:</h4>
                <select className="select-quantity-product-pop" onChange={handleselectProductquantity}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  </select>
                  </div>
                  </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
                
            </ProductContent>
            <CloseProductButton aria-label='Close Product' onClick={()=> props.setShowPopOut(prev =>!prev)}/>
          </ProductsWrapper>
        </Background>
      ) : null}
      ;
    </>
  );
};
