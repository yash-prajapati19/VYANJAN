import React, { Fragment } from 'react'
import OrderBox from './OrderBox';
import "./OrderHistory.css";


const OrderHistory = () => {
  return (
    <Fragment>
      <div className="order">
        <div className="orderTitle">
          <h2>Order History</h2>
        </div>
        <div className="orderBoxDiv">
        <OrderBox />
        <OrderBox />
        <OrderBox />
        </div>
   </div>
    </Fragment>
  );
}

export default OrderHistory