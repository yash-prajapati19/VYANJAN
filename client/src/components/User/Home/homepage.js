import { React, Fragment } from "react";
import Navbar from "./navbar";
import Slider from "./slider";
import Patti from "./patti";
import Search from "./search";
import Restau from "./reastau";
import Category from "./category";
import Footer from "./footer";

const Homepage = () => {
    return(
        <Fragment>
        <div className="main" style={{backgroundColor: "#151515"}}>
            <Navbar />
            <Slider />
            <Patti />
            <Search />
            <Restau />
            <Category />
            <Footer />
        </div>
        </Fragment>
    )
}

export default Homepage;