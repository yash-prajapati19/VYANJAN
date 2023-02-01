import React from 'react'
import './TotalAmount.css'
import {useNavigate} from 'react-router-dom'

const TotalAmount = () => {
    const navigate = useNavigate();

    const checkOutHandler = () => {
        navigate('/shipping');
    }
  return (
    <div className="grossTotal">
      <div className="grossHeading">Total Amount</div>
      <div className="initialAmount">
        <p>Initial Amount</p>
        <p>₹300</p>
      </div>
      <div className="deliveryCharges">
        <p>Delivery Charges</p>
        <p>₹30</p>
      </div>
      <div className="grandTotal">
        <p>Grand Total</p>
        <p>₹330</p>
      </div>
      <button onClick={checkOutHandler} >Proceed To CheckOut</button>
    </div>
  );
}

export default TotalAmount