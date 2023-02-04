import { React, Fragment } from "react";
import './patti.css'

const Patti = () => {
    return(
        <Fragment>
        <marquee scrollamount="10">
            <div className="patti">
               <div className="feature">
               <i class="fa-solid fa-tags"></i>
                    <span className="discount">FREE FOOD</span>
               </div>
               <div className="feature">
               <i class="fa-solid fa-motorcycle"></i>
                <span className="delivery">FAST DELIVERY</span>
               </div>
               <div className="feature">
               <i class="fa-solid fa-clapperboard"></i>
                <span className="enter">FULL-ON ENTERTAINMENT</span>
               </div>
               <div className="feature">
               <i class="fa-solid fa-dove"></i>
                <span className="enter">DON'T WASTE FOOD</span>
               </div>
            </div>
            </marquee>
        </Fragment>
    )
}

export default Patti;