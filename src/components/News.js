import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import news1 from '../images/news1.png';
import news2 from '../images/news2.png';
import news3 from '../images/news3.png';
import news4 from '../images/news4.png';


import './styles/thumbnail.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function News() {
  return (
    <div className = "top" >
    
    <h1 className ="newsHead">News Headlines</h1>
<Carousel c
  swipeable={false}
  draggable={false}
  // showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  slidesToSlide={2}
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="cardThumb" > 
    <img  src={news1} className="thumb" /> 
    <h1 className="headline" >Every job will change because of tech...</h1>
    <h1 className="date" >May 16</h1>
  </div>
  <div className= "cardThumb" > 
    <img src= {news2} className="thumb"  />
    <h1 className= "headline" >You asked. Bob Answered</h1>
    <h1 className="date" > May 14 </h1>
   </div>
  <div className= "cardThumb" > 
    <img src ={news3} className="thumb" /> 
    <h1 className ="headline" >Tech for good: Building New Collar skills
    </h1>
    <h1 className="date" >May 15</h1>
  </div>
  <div className ="cardThumb" > 
    <img src={news4}  className="thumb" ></img> 
    <h1 className="headline" > "I am on IBMer News" </h1>
    <h1 className ="date" >May 13</h1>
  </div>
  
  
  </Carousel>


    </div>
  )
}

export default News
