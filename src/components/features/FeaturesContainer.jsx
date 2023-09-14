import React, { useState, useEffect } from "react";
import BackgroundFeaturesImage from "../../assets/images/FeaturesBackGround.jpg";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "./FeatureCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturesContainer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    // Define a media query for small screens (you can customize this)
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check to set the initial state
    setIsSmallScreen(mediaQuery.matches);

    // Add a listener to track changes in the media query
    const mediaQueryListener = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Attach the listener
    mediaQuery.addEventListener("change", mediaQueryListener);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", mediaQueryListener);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // Adjust this to control the autoplay speed in milliseconds
    speed: 1000, // Adjust this to control the transition speed in milliseconds
    cssEase: "linear", // For a smoother sliding effect
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };
  const features = [1, 2, 3];
  if (isSmallScreen) {
    return (
      <div
        style={{
          backgroundImage: `url(${BackgroundFeaturesImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative w-full flex justify-center items-center flex-col py-4"
      >
        <div className="content-[''] absolute w-full h-full -z-9 left-0 top-0 bg-[rgba(0,0,0,0.75)]"></div>
        <div className="mt-4 flex flex-col justify-center items-center">
          <div className="relative w-fit">
            <Typography
              variant="h6"
              className="text-yellow-700 tracking-[0.25rem] font-[600]"
            >
              Feature
            </Typography>
            <div className="bottom-0 -left-[0.2rem] bg-yellow-900 opacity-40 absolute w-[100%] z-2 h-[0.7rem]"></div>
          </div>
          <Typography
            variant="h1"
            color="white"
            className="relative w-fit text-center"
          >
            Our Awesome Feature
          </Typography>
        </div>
        <Slider {...settings} className="w-full mt-[2rem]">
          {features.map((image, index) => (
            <div>
              <div className="flex justify-center items-center">
                <FeatureCard small={true}/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundImage: `url(${BackgroundFeaturesImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative p-[120px] w-full flex justify-center items-center flex-row"
      >
        <div className="content-[''] absolute w-full h-full -z-9 left-0 top-0 bg-[rgba(0,0,0,0.75)]"></div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-fit">
            <Typography
              variant="h6"
              className="text-yellow-700 tracking-[0.25rem] font-[600]"
            >
              Feature
            </Typography>
            <div className="bottom-0 -left-[0.2rem] bg-yellow-900 opacity-40 absolute w-[100%] z-2 h-[0.7rem]"></div>
          </div>
          <Typography variant="h1" color="white" className="relative">
            Our Awesome Feature
          </Typography>
          <div className="relative flex gap-12 mt-[3rem]">
            <div>
              <FeatureCard />
            </div>
            <div className="translate-y-[3rem]">
              <FeatureCard />
            </div>
            <div>
              <FeatureCard />
            </div>
            <div className="translate-y-[3rem]">
              <FeatureCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesContainer;
