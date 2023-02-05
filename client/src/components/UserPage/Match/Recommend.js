import { React, Fragment } from "react";
import UserLogo from "../../../images/User.png"
import Burger from '../../../images/burger.png';
import Pizza from '../../../images/pizza.png';
import Punjabi from '../../../images/punjabi.png'
import Snacks from '../../../images/snacks.png'
import South from '../../../images/south.png'
import Gujarati from '../../../images/gujarati.png'
import Chicken from '../../../images/chiken.png'
import Thandai from '../../../images/thandai.png'
import Icecream from '../../../images/ice-cream.png'

const Recomend = ({ titleURL, titleCap }) => {
    return(
        <Fragment>
        <div className="matchImages">
            <img className="matchUserImage" src={UserLogo} alt="" srcset="" />
            <img className="matchCategoryImage" src={titleURL} alt="" srcset="" />
        </div>
        <div className="matchFind"><button className="fymButton">ORDER {titleCap}</button></div>
        </Fragment>
    )
}

export default Recomend;