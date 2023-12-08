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
                Binevenue à TaxiParisien
              </Typography>
              <div className="bottom-0.5 left-0 bg-yellow-900 opacity-20 absolute w-[100%] h-[0.7rem]"></div>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Réservez un{" "}
              <Typography className="text-yellow-700 inline" variant="h1">
                Taxi
              </Typography>{" "}
              pour vos déplacements à Paris
            </Typography>
            <Typography variant="h6" color="white" className="mb-5 opacity-80">
            Bienvenue sur TaxiParisien, votre service de réservation de taxis de confiance à Paris. Nous vous proposons des courses en taxi fiables et abordables dans toute la région Ile-de-France. Réservez un taxi avec nous pour votre prochain déplacement.
            </Typography>
            <div className="flex md:flex-row flex-col w-5/6 items-center justify-center gap-2">
              <BookButton/>
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
        {/* sm:pt-[5%] lg:pt-[10%] md:pt-[10%] */}
        <div className="absolute inset-0 h-full w-full flex md:items-center md:pt-0 pt-20 justify-center bg-black/75 ">
          <div className="w-5/6 flex flex-col items-center text-center md:w-2/4">
            <div className="relative">
              <Typography
                variant="h5"
                color="white"
                className="text-yellow-700"
              >
                Binevenue à TaxiParisien
              </Typography>
              <div className="bottom-0.5 left-0 bg-yellow-900 opacity-20 absolute w-[100%] h-[0.7rem]"></div>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Réservez un{" "}
              <Typography className="text-yellow-700 inline" variant="h1">
                Taxi
              </Typography>{" "}
              pour vos déplacements à Paris
            </Typography>
            <Typography variant="h6" color="white" className="mb-5 opacity-80">
            Bienvenue sur TaxiParisien, votre service de réservation de taxis de confiance à Paris. Nous vous proposons des courses en taxi fiables et abordables dans toute la région Ile-de-France. Réservez un taxi avec nous pour votre prochain déplacement.
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
        {/* sm:pt-[5%] lg:pt-[10%] md:pt-[10%] */}
        <div className="absolute inset-0 h-full w-full flex md:items-center md:pt-0 pt-20 justify-center bg-black/75 ">
          <div className="w-5/6 flex flex-col items-center text-center md:w-2/4">
            <div className="relative">
              <Typography
                variant="h5"
                color="white"
                className="text-yellow-700"
              >
                Binevenue à TaxiParisien
              </Typography>
              <div className="bottom-0.5 left-0 bg-yellow-900 opacity-20 absolute w-[100%] h-[0.7rem]"></div>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Réservez un{" "}
              <Typography className="text-yellow-700 inline" variant="h1">
                Taxi
              </Typography>{" "}
              pour vos déplacements à Paris
            </Typography>
            <Typography variant="h6" color="white" className="mb-5 opacity-80">
            Bienvenue sur TaxiParisien, votre service de réservation de taxis de confiance à Paris. Nous vous proposons des courses en taxi fiables et abordables dans toute la région Ile-de-France. Réservez un taxi avec nous pour votre prochain déplacement.
            </Typography>
            <div className="flex md:flex-row flex-col w-5/6 items-center justify-center gap-2">
              <BookButton />
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
