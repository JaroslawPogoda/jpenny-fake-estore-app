import React, { useState } from "react";
import Product from "./Product/Product";
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import "./Products.css";
import styled from "styled-components";
import Categories from "./Categories/Categories"

const ButtonBack = styled(MdChevronLeft)`
  height: 75px;

  width: 75px;
  background: #fff;
`;
const ButtonNext = styled(MdChevronRight)`
  height: 75px;
  width: 75px;
  background: #fff;
`;
const ButtonContainerBack = styled.div`
  grid-area: Back;
  border: 4px solid #000;
  height: 100px;
  width: 200;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonContainerNext = styled.div`
  grid-area: Next;
  border: 4px solid #000;
  height: 100px;
  width: 200;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Products(props) {
  const [page, setPage] = useState(0);
  let tempArr = [];
  
   
  const [categories, setCategories]=useState([["men's clothing",'jewelery',"women's clothing",'electronics'],['jewelery'],["women's clothing"],['electronics']]);
  
  const allProductsArray = props.allProducts.filter(prod=>{let returnVal=false;
    
    categories[0].map(cat=>cat===prod.category?returnVal=true:false) 
    return returnVal;
   })
   
  //tempArr= props.allProducts.filter(prod=> categories.includes(prod.category))
  if (allProductsArray.length > 0 && page > -1) {
    for (
      let i = page * 6;
      i < 6 * (page + 1) && i < allProductsArray.length;
      i++
    ) {
      tempArr.push(allProductsArray[i]);
    }

    //setProducts(tempArr);
  }
  
  return (
    <div className="Products">
      <Categories categories={categories} setCategories={setCategories}/>
      <div className="top-left"></div>
      <div className="top-right"></div>
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <div className="Products-container">
        {tempArr.map((product, index) => {
    
          return <Product key={index} index={index} product={product} />;
        })}
      </div>
      {page > 0 ? (
        <ButtonContainerBack
          className="Back"
          onClick={() =>
            setPage((prevPage) => {
              return prevPage - 1;
            })
          }
        >
          <ButtonBack />
        </ButtonContainerBack>
      ) : null}
      {allProductsArray.length - page * 6 > 6 ? (
        <ButtonContainerNext
          className="Next"
          onClick={() =>
            setPage((prevPage) => {
              return prevPage + 1;
            })
          }
        >
          <ButtonNext />
        </ButtonContainerNext>
      ) : null}
    </div>
  )
}
