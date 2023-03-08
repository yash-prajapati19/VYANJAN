import React, { Fragment, useState } from "react";
const AdminOrderSum = () => {
  const [show, setShow] = useState(false);
  const [showSign, setShowSign] = useState("v");
  const showHandler = () => {
    if (show === true) {
      setShow(false);
      setShowSign("v");
    } else {
      setShow(true);
      setShowSign("ʌ");
    }
  };
  return (
    <Fragment>
      <div className="orderSum">
        <div className="orderSumTitle" onClick={showHandler}>
          <h3>Order Summary</h3>
          <p>{showSign}</p>
        </div>
        {show === true && (
          <div className="orderDetails">
            <div className="orderName">
              <p>Pizza</p>
              <p>₹200</p>
            </div>
            <div className="totalPrice">
              <p>Grand Total</p>
              <p>₹240</p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default AdminOrderSum;
