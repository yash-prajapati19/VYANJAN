import { React, Fragment } from "react";
import UserLogo from "../../../images/User.png"
import CatDefault from "../../../images/water.png"

const DefaultMatch = () => {
    return(
        <Fragment>
        <div className="matchImages">
            <img className="matchUserImage" src={UserLogo} alt="" srcset="" />
            <img className="matchCategoryImage" src={CatDefault} alt="" srcset="" />
        </div>
        </Fragment>
    )
}

export default DefaultMatch;