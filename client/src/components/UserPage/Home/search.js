import { React, Fragment } from "react";
import "./search.css"

const Search = () => {
    function scrollUp(){
        window.scrollTo({
            top: 440,
            behavior: 'smooth',
          });
     }
    return(
        <Fragment>
        <div className="search">
            <input type="text" onClick={scrollUp}/>
            <button className="userLocation navB"><i class="fa-solid fa-location-crosshairs"></i></button>
        </div>
        </Fragment>
    )
}

export default Search;