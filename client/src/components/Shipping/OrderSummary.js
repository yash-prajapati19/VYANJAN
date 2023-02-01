import React, { Fragment } from 'react'
import './OrderSummary.css'

const OrderSummary = () => {
  return (
    <Fragment>
      <div className="orderSummary">
        <div className="title">
          <h3>Order Summary</h3>
        </div>
        <div className="order">
          <p>Pizza</p>
          <p>₹200</p>
        </div>
        <div className="total">
          <p>Grand Total</p>
          <p>₹240</p>
        </div>
        <button>Place Order</button>
      </div>
    </Fragment>
  );
}

export default OrderSummary