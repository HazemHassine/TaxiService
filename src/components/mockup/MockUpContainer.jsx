import React from "react";
import MockupImage from "../../assets/images/mockup_phone.png";
import { Typography } from "@material-tailwind/react";

function MockUpContainer() {
  return (
    <div className="bg-gray-900 flex justify-center py-6 w-full">
      <div className="relative overflow-hidden flex md:h-[500px] h-[350px] md:py-16 items-center md:items-start md:justify-center md:w-4/6 w-5/6 bg-white rounded-3xl px-6">
        <div className="absolute top-[15%] right-0 md:rotate-[-20deg] md:-top-[2rem] md:-right-[4rem]">
          <img src={MockupImage} className="md:h-[800px] h-[250px] w-auto md:hover:translate-y-0 md:translate-y-10 ease-in-out duration-200 hover:drop-shadow-[0_0_20px_rgba(241,182,35,1)] drop-shadow-[0_0px_30px_rgba(33,33,33,0.5)]" />
        </div>
        <div className="flex flex-col md:gap-[1.5rem] md:w-1/2 w-2/3">
          <Typography className="text-3xl font-bold md:text-6xl text-yellow-700">
            We made booking soo easy
          </Typography>
          <Typography className="text-md md:text-3xl text-black">
            We made booking soo easy We made booking soo easy We made booking
            soo easy
          </Typography>
          <Typography color="gray" className="text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quas?
            Dolore omnis inventore neque sequi repudiandae
          </Typography>
        </div>
        <div className="md:w-1/3 w-0"></div>
      </div>
    </div>
  );
}

export default MockUpContainer;
