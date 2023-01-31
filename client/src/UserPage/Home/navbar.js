import { React } from "react";
import Img1 from "../../images/logo.png"


const Navbar = () => {
    console.log("Nav");
    return(
        <div className="navbar">
            <div className="logo">
            <p>Hi</p>
                <img src={Img1} alt="" />
            </div>
        </div>
    )
}

export default Navbar;