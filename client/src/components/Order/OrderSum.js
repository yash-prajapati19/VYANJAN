import React, { Fragment } from 'react'
import './OrderSum.css'

const OrderSum = () => {
  return (
    <Fragment>
      <div className="orderSum">
        <div className="orderSumTitle">
          <h3>Order Summary</h3>
        </div>
        <div className="orderName">
          <p>Pizza</p>
          <p>₹200</p>
        </div>
        <div className="totalPrice">
          <p>Grand Total</p>
          <p>₹240</p>
        </div>
      </div>
    </Fragment>
  );
}

export default OrderSum