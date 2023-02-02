import React, { Fragment } from 'react'
import "./RestaurantSuggestion.css";
import SuggestionCard from "./SuggestionCard";
import Restaurant1 from "../../../images/Restaurant1.jpeg";
import Restaurant2 from "../../../images/Restaurant2.jpg";

const RestaurantSuggestion = () => {
  const restaurant = [
    {
       name:"Restaurant 1 ",
       image:Restaurant1,
       address:"Address 1",
       price:"₹399"
    },
    {
       name:"Restaurant 2",
       image:Restaurant2,
       address:"Address 2",
       price:"₹599"
    },
  ]
   
  return (
    <Fragment>
      <div className="suggestion">
        <div className="suggestionHeading">Order From Your Favorite Eatery</div>
        <div className="container" id="container">
          {restaurant.map((data,i) => (
            <SuggestionCard 
            key={i}
            name={data.name}
            image={data.image}
            address={data.address}
            price={data.price}
            />
          ))}
          {/* <SuggestionCard
            name="Restaurant 1"
            image={Restaurant1}
            address="Address 1"
            price="₹399"
          /> */}
        </div>
      </div>
    </Fragment>
  );
}

export default RestaurantSuggestion