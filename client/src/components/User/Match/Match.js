import { React, Fragment, useEffect } from "react";
import Navbar from "../Home/navbar";
import UserLogo from "../../../images/User.png"
import CatImg from "../../../images/south.png"
import './match.css'

const Match = () => {
    useEffect(() => {   
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])
      
    return(
        <Fragment>
        <style>@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');</style>
        <Navbar />
        <div className="backgroundImg">
            <div className="matchCard">
                <div className="findYourMatch">
                    <p className="fymText">Find Your Match</p>
                </div>
                <div className="matchImages">
                    <img className="matchUserImage" src={UserLogo} alt="" srcSet="" />
                    <img className="matchCategoryImage" src={CatImg} alt="" srcSet="" />
                </div>
                <div className="matchFind"><button className="fymButton">FIND MATCH</button></div>
            </div>
        </div>
        </Fragment>
    )
}

export default Match;