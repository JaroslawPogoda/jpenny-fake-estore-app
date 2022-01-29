import React,{useContext} from 'react';
import PaymentInputs from './Payment/PaymentInputs'
import { CartStateContext } from '../Layout';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import './Checkout.css'





function Checkout() {
 
    const value= useContext(CartStateContext)
    const handleSubmitCheckout = event =>{

    }
    
  return (
  <div className="checkout-window">
      <h1>Checkout</h1>
     
      <div className="checkout-items-from-cart">
        {value.cart.products.map((product, index)=><CheckoutProduct key={index} product={product}/>)}
      </div>
      <form className="checkout-form" onSubmit={handleSubmitCheckout}>
            <PaymentInputs/>
          <button className="btn-submit-checkout">Pay</button>
      </form>
  </div>)
}

export default Checkout;
