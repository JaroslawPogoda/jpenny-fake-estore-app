//Objective render product to Cart
//import
import React from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
//end imports
function CartProduct(props) {
  //change quantity of product in cart
  const handleChangeQuantity = (event) => {
    props.dispatchCart({
      type: "CHANGEQTY",
      payload: {
        product: props.product,
        index: props.index,
        quantity: event.target.value,
      },
    });
  };//end of change quantity handler
  //declaration of handleRemove product form cart 
  const handleRemove = (event) => {
    props.dispatchCart({
      type: "REMOVE",
      payload: {
        product: props.product,
        index: props.index,
        quantity: event.target.value,
      },
    });
  };//end of handleRemove
  //return
  return (
    <div className="cart-item-product">
      <h4>{props.product.title}</h4>
      <div className="cart-item-product-detail">
        <h4>Price: {props.product.price}</h4>
        <h4>Quantity: {props.product.quantity}</h4>
        <select htmlfor="product-quantity" onChange={handleChangeQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <MdOutlineRemoveCircleOutline onClick={handleRemove}>
          {" "}
          remove
        </MdOutlineRemoveCircleOutline>
      </div>
    </div>
  );
}//end of return

export default CartProduct;
