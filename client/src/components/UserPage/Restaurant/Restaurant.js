import { React, Fragment } from "react";
import Navbar from "../Home/navbar";
import Footer from "../Home/footer";
import RestauInfo from "./RestauInfo";
import Items from "./Items";

const Restaurant = () => {
    return(
        <Fragment>
        <div className="main" style={{backgroundColor: "#151515"}}>
            <Navbar />
            <RestauInfo />
            <Items />
            <Footer />
        </div>
        </Fragment>
    )
}

export default Restaurant;