import { Fragment, React } from "react";
import Img1 from "../../../images/sliderImg1.jpg"
import Img2 from "../../../images/sliderImg2.jpg"
import Img3 from "../../../images/sliderImg3.png"
import Img4 from "../../../images/sliderImg4.png"
import './slider.css'

const Navbar = () => {
    var currentIndex = 0;
    var count = 0;
    var slides = document.getElementsByClassName('slider-img');
    var timeInterval = 3500;
    function repeatslide(){
        for(var i = 0; i < slides.length; i++){
            if(i === currentIndex){
                slides[i].classList.add("active");
            }else{
                slides[i].classList.remove("active");
            }
        }
    }
    function callAutoImage(load){
        if(load){
            timeInterval = 8000;
        }
        setTimeout(function(){ 
            timeInterval=4500;
            if(count > 0){
                callAutoImage();
                return;
            }
            else{
                currentIndex++;
            if(currentIndex >= slides.length){
                currentIndex = 0;
            }
                repeatslide();
                callAutoImage();
            }
           
        }, timeInterval);
    }
    callAutoImage();
    console.log("Nav");
    return(
        <Fragment>
        <style>@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap);</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Rowdies&family=Ubuntu:wght@700&display=swap');</style>
        <div className="main-slider">
        <div className="slider">
            <div className="slider-area">
 
                <div className="slider-img show active" id="s1"><img src={Img1} alt="" />
                <div className="parda"></div>
                <p>PATHAN KI SITE SE <br></br> ORDER KAROGE</p>
                <p>TOH PATHAN AAYEGA HI..</p>
                </div>
                <div className="slider-img show" id="s2"><img src={Img2} alt="" />
                <div className="parda"></div>
                <p>ORDER JETHALAL'S </p>
                <p>FAVORITE FOOD</p>
                <p>Haay Main Marr Jaava &#128149;</p>
                </div>
                <div className="slider-img show" id="s3"><img src={Img4} alt="" />
                <div className="parda"></div>
                  <p>CHAL CHAL</p>
                  <p>PANI PURI</p>
                  <p>ORDER KAR</p>
                </div>
                <div className="slider-img show" id="s4"><img src={Img3} alt="" />
                <div className="parda"></div>
                  <p>JHUKEGA NHI...</p>
                  <p>No Compromise On Food &#128293;</p>
                </div>
        </div>
    </div>
 </div>
 </Fragment>  
 )
}

export default Navbar;