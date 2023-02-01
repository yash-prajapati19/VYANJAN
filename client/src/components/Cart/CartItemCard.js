import React, { useState } from 'react'
import './CartItemCard.css'
import DeleteIcon from '@material-ui/icons/Delete'

const CartItemCard = () => {

    const [quantity , setQuantity] = useState(1);
    const items = {
      image:"https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg",
      name:"Pizza",
      price:300,
    };
    const increaseItem = () =>{
     const newQuant = quantity + 1;
     setQuantity(newQuant)
    }
    const decreaseItem = () =>{
        if(quantity < 2) return;
     const newQuant = quantity - 1;
     setQuantity(newQuant)
    }
  return (
    <div className="cartItemCard">
      <img src={items.image} alt={items.name} />
      <div className="contentBox">
        <h3>{items.name}</h3>
        <p>₹{items.price}</p>
        <div className="quantity">
          <button onClick={decreaseItem}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={increaseItem}>+</button>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default CartItemCard