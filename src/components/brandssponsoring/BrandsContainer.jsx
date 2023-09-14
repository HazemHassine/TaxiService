import React, { useState, useEffect } from 'react';

import BrandCard from "./BrandCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function BrandsContainer(props) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    // Define a media query for small screens (you can customize this)
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Initial check to set the initial state
    setIsSmallScreen(mediaQuery.matches);

    // Add a listener to track changes in the media query
    const mediaQueryListener = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Attach the listener
    mediaQuery.addEventListener('change', mediaQueryListener);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, []);
  
  const settings = {
    infinite: true,
    slidesToShow: isSmallScreen?4:7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this to control the autoplay speed in milliseconds
    speed: 1000, // Adjust this to control the transition speed in milliseconds
    cssEase: "linear", // For a smoother sliding effect
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div className="md:w-5/6 w-full m-[0_auto] h-[100px]">
      <Slider {...settings} className="w-full">
        {props.images.map((image, index) => (
          <div
          key={index}
          >
            <div
              className="flex justify-center items-center opacity-70 hover:opacity-100 ease-in-out transition-all saturate-0 hover:saturate-100 duration-200"
            >
              <img
                className="p-1 h-[100px] w-auto"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// return (
//   <div
//     className="flex justify-center items-center md:gap-[2rem] gap-auto overflow-hidden w-5/6"
//   >
//     {images.slice(1,5).map((image, index) => (
//       <BrandCard image={image} key={index} />
//     ))}
//   </div>

export default BrandsContainer;
