import { React, Fragment, useEffect } from "react";
import './signin.css'
import Logo from '../../../images/logo.png';
import M1 from '../../../images/google.png';
import S1 from '../../../images/srk.png';
import S2 from '../../../images/alia.png';
import S3 from '../../../images/ak.png';
import S4 from '../../../images/rk.png';
import S5 from '../../../images/yash.png';
import S6 from '../../../images/allu.png';
import S7 from '../../../images/shra.png';

const SignIn = () => {
    useEffect(() => {   
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])
    return(
        <Fragment>
        <div className="signIn">
            <img src={Logo} alt="" className="logo" />
            <button className="signInWithG">SIGN IN WITH <img src={M1} alt="" /></button>
            <img src={S1} alt="" srcSet="" id="star1"/>
            <img src={S2} alt="" srcSet="" id="star2"/>
            <img src={S3} alt="" srcSet="" id="star3"/>
            <img src={S4} alt="" srcSet="" id="star4"/>
            <img src={S5} alt="" srcSet="" id="star5"/>
            <img src={S6} alt="" srcSet="" id="star6"/>
            <img src={S7} alt="" srcSet="" id="star7"/>
        </div>
        </Fragment>
    )
}

export default SignIn;