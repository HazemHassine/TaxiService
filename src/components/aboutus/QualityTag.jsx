import React from "react";
import TaxiBooking from "../../assets/images/taxi-booking.svg";
import { Typography } from "@material-tailwind/react";

function QualityTag() {
  return (
    <div className="flex items-center bg-black h-[5rem] w-[14rem] rounded-full p-2">
      <img
        className="rounded-full bg-yellow-700 h-full p-1"
        color="#ffffff"
        src={TaxiBooking}
        alt="taxi booking"
      />
      <div className="flex pl-3 justify-center items-center" >
        <Typography color="white" variant="h6" className="text-left">
        Qualité garantie
        </Typography>
      </div>
      
    </div>
  );
}

export default QualityTag;
