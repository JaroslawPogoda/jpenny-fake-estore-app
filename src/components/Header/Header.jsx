import React,{useState,useContext} from "react";
import Nav from './Nav/Nav'
import Cart from '../Cart/Cart'
import CartIcon from "../Cart/CartIcon/CartIcon";
import { CartStateContext } from "../Layout";
import './Header.css'
export default function Header(props) {
  const value = useContext(CartStateContext)
    const [totalQuantity,setTotalQuantity]=useState(0)
    const [hideCart,setHideCart]=useState(true)
  return (
    <div className="Header">
      <Nav />
      <div className="cart-icon">
      {value.cart.token?hideCart?<CartIcon setTotalQuantity={setTotalQuantity} totalQuantity={totalQuantity} hideCart={hideCart} setHideCart={setHideCart}/>:<Cart setHideCart={setHideCart}/>:null}
      </div>
    </div>
  );
}
