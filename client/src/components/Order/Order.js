import React, { Fragment } from 'react'
import './Order.css'
import OrderSum from './OrderSum'

const Order = () => {
  return (
    <Fragment>
      <div className="order">
        <div className="orderTitle">
          <h2>Order History:</h2>
        </div>
        <div className="orderBox">
          <div className="orderId">
            <p>Order Id:</p>
            <p>ORDER001</p>
          </div>
          <div className="orderFrom">
            <p>Order From:</p>
            <p>Haryali</p>
          </div>
          <div className="orderCall">
            <p>Call:</p>
            <p>9700012345</p>
          </div>
            <OrderSum />
          <div className="cancel">
            <p>Order Placed</p>
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Order