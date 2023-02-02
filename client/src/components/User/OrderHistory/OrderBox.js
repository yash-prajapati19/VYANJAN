import React from 'react'
import OrderSum from "./OrderSum";


const OrderBox = () => {
  return (
     <div className="orderBox">
          <div className="orderId">
            <p>Order Id:</p>
            <p>ORDER001</p>
          </div>
          <div className="orderFrom">
            <p>Ordered From: </p>
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
  )
}

export default OrderBox