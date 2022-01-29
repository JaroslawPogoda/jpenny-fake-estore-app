import React from 'react';
import {MdShoppingCart} from 'react-icons/md'
function CartIcon(props) {
    const handleOnClick = event =>{
        props.setHideCart(!props.hideCart)
    }
  return <div onClick={handleOnClick} >
      <MdShoppingCart/>
      <p>Cart</p>
  </div>;
}

export default CartIcon;
