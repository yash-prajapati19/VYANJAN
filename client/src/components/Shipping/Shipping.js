import React , { Fragment } from 'react'
import './Shipping.css'
import OrderSummary from './OrderSummary'

const Shipping = () => {
  return (
    <Fragment>
      <div className="shipping">
        <div className="address">
          <div className="heading">
            <h2>Delivery Details</h2>
          </div>
          <div className="form">
            <div className="formHeading">Address:</div>
            <input type="text" placeholder="Flat" />
            <input type="text" placeholder="Locality" />
            <input type="text" placeholder="Street" />
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Contact No" />
          </div>
        </div>
        <div className="summary">
          <OrderSummary />
        </div>
      </div>
    </Fragment>
  );
}

export default Shipping