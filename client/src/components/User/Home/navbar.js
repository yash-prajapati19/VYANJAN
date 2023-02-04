import { React, Fragment } from "react";
import Logo from "../../../images/logo.png"
import './navbar.css'

const Navbar = () => {
    console.log("Nav");
    return(
        <Fragment>
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="login">
                <button className="loginButton navB">LOG IN</button>
            </div>
            <div className="order">
                <button className="orderButton navB">ORDER</button>
            </div>
            <div className="cart">
                <button className="cartButton navB">CART <span className="cartItemCount">0</span> </button>
            </div>
        </div>
        </Fragment>
    )
}

export default Navbar;