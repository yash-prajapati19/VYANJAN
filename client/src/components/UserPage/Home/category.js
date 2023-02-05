import { React, Fragment } from "react";
import './category.css'
import Cat1 from '../../../images/burger.png';
import Cat2 from '../../../images/pizza.png';
import Cat3 from '../../../images/punjabi.png'
import Cat4 from '../../../images/snacks.png'
import Cat5 from '../../../images/south.png'
import Cat6 from '../../../images/gujarati.png'
import Cat7 from '../../../images/chiken.png'
import Cat8 from '../../../images/thandai.png'
import Cat9 from '../../../images/ice-cream.png'
const Category = () => {
    return(
        <Fragment>
        <div className="category">
            <p className="categories">Categories</p>
            <div className="food">
            <figure>
                <img src={Cat1} alt="" />
                <figcaption>BURGER</figcaption>
            </figure>
            <figure>
                <img src={Cat2} alt="" />
                <figcaption>PIZZA</figcaption>
            </figure>
            <figure>
                <img src={Cat3} alt="" />
                <figcaption>PUNJABI</figcaption>
            </figure>
            <figure>
                <img src={Cat4} alt="" />
                <figcaption><center>SNACKS</center></figcaption>
            </figure>
            <figure>
                <img src={Cat5} alt="" />
                <figcaption>SOUTH</figcaption>
            </figure>
            <figure>
                <img src={Cat6} alt="" />
                <figcaption>GUJARATI</figcaption>
            </figure>
            <figure>
                <img src={Cat7} alt="" />
                <figcaption>CHICKEN</figcaption>
            </figure>
            <figure>
                <img src={Cat8} alt="" />
                <figcaption>THANDAI</figcaption>
            </figure>
            <figure>
                <img src={Cat9} alt="" />
                <figcaption>ICE-CREAM</figcaption>
            </figure>
            </div>
        </div>
        </Fragment>
    )
}

export default Category;