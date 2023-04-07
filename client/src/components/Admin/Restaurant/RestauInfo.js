import { React, Fragment } from "react";
import { useDispatch , useSelector } from 'react-redux'
import RImg from "../../../images/restauImg.jpg"
import './restauInfo.css'

const RestauInfo = () => {
     const dispatch = useDispatch();
     const {
       restaurants,
     } = useSelector((state) => state.items);
    return (
      <Fragment>
        <div className="restauInfo">
          <div className="restaurantAbout">
            <div className="Restauparda"></div>
            <p className="restaurantTitle">
              DOMINO'S PIZZA 
            </p> 
            <p className="restaurantDetails">
              Domino's is OPEN to serve you. Order all your favorite pizzas. We
              ensure you to the cleanest pizzas in India. Baked at 465 'F. 100%
              Sanitised
            </p>
            <p className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </p>
          </div>
          <div className="restaurantImage">
            <img src={RImg} alt="" srcSet="" />
          </div>
        </div>
      </Fragment>
    );
}

export default RestauInfo;