import React from "react";
import AboutUsImageContainer from "./AboutUsImageContainer";
import AboutUsTextContainer from "./AboutUsTextContainer";
function AboutUsContainer() {
  return (
    <div className="flex justify-center w-screen">
      <div className="flex justify-center flex-col lg:flex-row w-5/6">
        <AboutUsImageContainer/>
        <AboutUsTextContainer className="ml-[10%]"/>
      </div>
    </div>
  );
}

export default AboutUsContainer;
