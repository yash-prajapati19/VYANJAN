import { React, Fragment } from "react";
import './footer.css'
import M1 from '../../../images/google.png';
import M2 from '../../../images/insta.png';
import M3 from '../../../images/twitter.png'
import M4 from '../../../images/youtube.png'


const Footer = () => {
    return(
        <Fragment>
        <div className="footer">
            <button className="register">Add Your Restaurant</button>
            <div className="media">
                <a href="#"><img src={M1} alt="" srcset="" /></a>
                <a href="#"><img src={M2} alt="" srcset="" /></a>
                <a href="#"><img src={M3} alt="" srcset="" /></a>
                <a href="#"><img src={M4} alt="" srcset="" /></a>
            </div>
        </div>
        </Fragment>
    )
}

export default Footer;