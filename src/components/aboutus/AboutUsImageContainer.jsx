import React from "react";
import QualityTag from "./QualityTag";
import TaxiImage from "../../assets/images/taxi-image.png";
function AboutUsImageContainer() {
  return (
    <div className="flex justify-end relative w-full lg:w-[43%]">
      <div className="absolute -z-[9] top-0 left-0 lg:left-[20%]">
        <QualityTag />
      </div>
      <img src={TaxiImage}  className="-z-10 m-1"/>
    </div>
  );
}

export default AboutUsImageContainer;
