import { React, Fragment } from "react";
import Navbar from "../../User/Home/navbar";
import Footer from "../../User/Home/footer";
import RestauInfo from "./RestauInfo";
import Items from "./Items";

const Restaurant = () => {
    return(
        <Fragment>
        <style>@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Patrick+Hand+SC&family=Permanent+Marker&display=swap');</style>
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