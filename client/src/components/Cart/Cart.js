import React, { Fragment } from 'react'
import './Cart.css'
import TotalAmount from './TotalAmount';
import CartItemCard from './CartItemCard';

const Cart = () => {
  return (
    <Fragment>
        <div className="cartHeader">Cart(3 items)</div>
      <div className="cart">
        <div className="cartItemCard">
          <CartItemCard />
        </div>
       <div className="totalAmount">
        <TotalAmount />
       </div>
      </div>
    </Fragment>
  );
}

export default Cart