import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

 function Home() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <div className="conatiner">
      <Slider {...settings}>
      <div className="justify">
        {/* <h3>1</h3> */}
        
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>2</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>3</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>4</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
      <div className="justify">
        {/* <h3>5</h3> */}
        <img src="./images/colglogo.png"/>
      </div>
     
    </Slider>
    </div>
    );
  }

  export default Home