import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SuggestionCard = ({name, image, address, price}) => {
   const options = {
     edit: false,
     color: "rgba(20,20,20,0.1)",
     activeColor: "tomato",
     size: window.innerWidth < 600 ? 20 : 25,
     value: 5,
     isHalf: true,
   };
  return (
    <Link className="suggestCard" to={`/`}>
      <img src={image} alt={name} />
      <div className="details">
          <p>{name}</p>
          <div>
            <ReactStars {...options} />{" "}
        </div>
        <span>{address}</span>
        <span>{`Starting from ${price}`}</span>
        <p>Accepting cash and online payments</p>
      </div>
    </Link>
  );
};

export default SuggestionCard;
