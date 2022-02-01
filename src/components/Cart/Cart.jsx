import React,{useContext} from 'react';
import {CartStateContext} from '../Layout'
import CartProduct from './CartProduct/CartProduct'
import {MdClose,MdPayment} from 'react-icons/md'
import {Link} from 'react-router-dom'
import "./Cart.css"
function Cart(props) {
    const value = useContext(CartStateContext)
    let total=0
    const handleCloseCart= event=>{
      props.setHideCart(true)
    }
  return (
  <div className="cart">
     
      <h1>Cart</h1>
      <MdClose className="cart-close" onClick={handleCloseCart}/>
      {console.log(value)}
        {value.cart.products.map((product,index) =>{
          total+=(product.price*product.quantity) 
        return <CartProduct product={product} index={index} key={index} dispatchCart={value.dispatchCart}/> })}
        <p>Total:${Math.round(total * 100) / 100}</p>
        <Link to={'checkout'}><button><MdPayment/>Checkout</button></Link>

  </div>);
}

export default Cart;
