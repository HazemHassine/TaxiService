import React from "react";
// import "./booktaxisimple.css";
import squares_image from "../../assets/images/squares.png";
import { Typography } from "@material-tailwind/react";
import { Headset } from "react-bootstrap-icons";
import BookButtonBlack from "../buttons/BookbuttonBlack";

function BookTaxiSimpleContainer() {
  return (
    <div className="w-screen bg-yellow-700 flex items-center flex-col">
      <div
        style={{ backgroundImage: `url(${squares_image})` }}
        className="h-[40px] w-full lg:mb-[100px] mb-[20px]"
      ></div>
      <div className="flex flex-col lg:flex-row w-5/6 md:text-start text-center md:items-start items-center justify-center">
        <div className="md:w-4/6 w-full ">
          <Typography color="white" variant="h1">
            Book Your Cab It's Simple
          </Typography>
          <Typography color="white" variant="h1">
            And Affordable
          </Typography>
          <Typography color="white" variant="p" className="mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout point of
            using is that it has normal distribution of letters.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-2/6 h-full">
          <div className="flex flex-col md:flex-row gap-0 md:pt-0 pt-4 items-center">
            <div className="md:w-[3px] md:h-full w-full h-[3px] bg-white overflow-visible"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
              className="md:-translate-x-[6px] -translate-y-[6px] rotate-[90deg] md:rotate-0"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </div>
          <div className="flex flex-col md:justify-start justify-center md:items-end items-center md:pt-10 md:pl-10">
            <div className="flex gap-3 items-center">
              <Headset color="white" size={38} />
              <Typography color="white" variant="h2">
                +216
              </Typography>
              <Typography color="white" variant="h2">
                29
              </Typography>
              <Typography color="white" variant="h2">
                478
              </Typography>
              <Typography color="white" variant="h2">
                308
              </Typography>
            </div>            
              <div className="mt-[12px]">
                <BookButtonBlack />
              </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${squares_image})` }}
        className="h-[40px] lg:mt-[100px] mt-[20px] w-full"
      ></div>
    </div>
  );
}

export default BookTaxiSimpleContainer;
