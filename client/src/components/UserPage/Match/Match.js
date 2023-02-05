import { React, Fragment, useEffect, useState, lazy, Suspense } from "react";
import Navbar from "../Home/navbar";
import DefaultMatch from "./DefaultFind";
import Cat1 from '../../../images/burger.png';
import Cat2 from '../../../images/pizza.png';
import Cat3 from '../../../images/punjabi.png'
import Cat4 from '../../../images/snacks.png'
import Cat5 from '../../../images/south.png'
import Cat6 from '../../../images/gujarati.png'
import Cat7 from '../../../images/chiken.png'
import Cat8 from '../../../images/thandai.png'
import Cat9 from '../../../images/ice-cream.png'
import Panvel from "../../../images/loader.png"
import './match.css'
const Recomend = lazy(()=>{   return new Promise(resolve => {
    setTimeout(() => resolve(import("./Recommend")), 2500);
  });
});

const Match = () => {
    const [active, setactive] = useState("default");
    useEffect(() => {   
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])
    const catArr = ["burger", "pizza", "punjabi", "gujarati", "south", "icecream", "thandai", "chicken", "snacks"];
    function random(){
        document.getElementById('matchFind').style.display = 'none';
        const recomend = Math.floor(Math.random() * 10);
        setactive(catArr[recomend]);
        sessionStorage.setItem('match', catArr[recomend]);
    }
    console.log(typeof sessionStorage.getItem('match'));
    return(
        <Fragment>
        <style>@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');</style>
        <Navbar />
        <div className="backgroundImg">
            <div className="matchCard">
                <div className="findYourMatch">
                    <p className="fymText">Find Your Match</p>
                </div>
                <Suspense fallback={
                <div className="panvel">
                   <img src={Panvel} alt="" />
                   <div className="panvelDia">
                    <p className="jaldiKar">Jaldi Kar Kal Subah</p>
                    <p className="panvelNikalna">Panvel Nikalna Hai</p>
                   </div>
                </div>}>
                    {active === "pizza" && <Recomend titleURL={Cat2} titleCap="Pizza" />}
                    {active === "burger" && <Recomend titleURL={Cat1} titleCap="Burger" />}
                    {active === "punjabi" && <Recomend titleURL={Cat3} titleCap="Punjabi Food" />}
                    {active === "gujarati" && <Recomend titleURL={Cat6} titleCap="Gujarati Food" />}
                    {active === "south" && <Recomend titleURL={Cat5} titleCap="South Indian Food" />}
                    {active === "icecream" && <Recomend titleURL={Cat9} titleCap="Ice-Cream" />}
                    {active === "thandai" && <Recomend titleURL={Cat8} titleCap="Thandai" />}
                    {active === "chicken" && <Recomend titleURL={Cat7} titleCap="Chicken" />}
                    {active === "snacks" && <Recomend titleURL={Cat4} titleCap="Snacks" />}
                    
                    {active === "default" &&  <DefaultMatch />}
             </Suspense>
             <div className="matchFind" id="matchFind"><button className="fymButton" onClick={random}>FIND MATCH</button></div>
            </div>
        </div>
        </Fragment>
    )
}

export default Match;