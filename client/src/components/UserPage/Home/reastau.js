import { React, Fragment } from "react";
import Pizza from "../../../images/pizza.jpg"
import './restau.css'

const Restau = () => {
    return(
        <Fragment>
        <div className="restau">
            <p className="restaurants">Restaurants</p>
            <div className="restauCat">
                <div className="rCard">
                    <img src={Pizza} alt="" srcset="" />
                    <p className="rName">Domino's Pizza</p>
                    <p className="rLoc"><i class="fa-solid fa-location-dot"></i> Manjalpur</p>
                    <p className="rCategories">Fast Food, Beverages</p>
                    <p className="minOrder">Minimum Order Rs 180</p>
                    <button className="rOrderBut">ORDER NOW</button>
                </div>
                <div className="rCard">
                    <img src={Pizza} alt="" srcset="" />
                    <p className="rName">Domino's Pizza</p>
                    <p className="rLoc"><i class="fa-solid fa-location-dot"></i> Manjalpur</p>
                    <p className="rCategories">Fast Food, Beverages</p>
                    <p className="minOrder">Minimum Order Rs 180</p>
                    <button className="rOrderBut">ORDER NOW</button>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Restau;