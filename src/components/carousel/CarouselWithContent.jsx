import { Carousel, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import BookButton from "../buttons/Bookbutton";
import LearnMoreButton from "../buttons/LearnMoreButton";
import CarouselImage from "../../assets/images/FeaturesBackGround.jpg";

export function CarouselWithContent() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    console.log("true");
    setHovered(true);
  };

  const handleHoverEnd = () => {
    console.log("false");
    setHovered(false);
  };
  return (
    <Carousel
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      autoplay={hovered ? false : true}
      autoplayDelay={100000}
      loop={true}
      navigation={({ a, b, c }) => <div></div>}
      className="relative h-[80vh] md:h-[40rem] rounded-xl"
    >
      <div className="relative bg-white h-full w-full">
        <img
          src={CarouselImage}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        {/* sm:pt-[5%] lg:pt-[10%] md:pt-[10%] */}
        <div className="absolute inset-0 h-full w-full flex md:items-center md:pt-0 pt-20 justify-center bg-black/75 ">
          <div className="w-5/6 flex flex-col items-center text-center md:w-2/4">
            <div className="relative">
              <Typography
                variant="h5"
                color="white"
                className="text-yellow-700"
              >
                Welcome to Taxio
              </Typography>
              <div className="bottom-0.5 left-0 bg-yellow-900 opacity-20 absolute w-[100%] h-[0.7rem]"></div>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Book a{" "}
              <Typography className="text-yellow-700 inline" variant="h1">
                Taxi
              </Typography>{" "}
              for your ride
            </Typography>
            <Typography
              variant="h6"
              color="white"
              className="mb-5 opacity-80"
            >
              Lorem ipsum dololo porro. Incidunt dicta ut magni sapiente earum
              enim doloremque.
            </Typography>
            <div className="flex md:flex-row flex-col w-5/6 items-center justify-center gap-2">
              <BookButton />
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={CarouselImage}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={CarouselImage}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
