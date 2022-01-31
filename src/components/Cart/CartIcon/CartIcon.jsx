import React from 'react';
import {MdShoppingCart} from 'react-icons/md'
import './CartIcon.css'
function CartIcon(props) {
    const handleOnClick = event =>{
        props.setHideCart(!props.hideCart)
    }
  return <div onClick={handleOnClick} >
      <MdShoppingCart className="md-shopping-cart"/>
      <p>Cart</p>
  </div>;
}

export default CartIcon;
