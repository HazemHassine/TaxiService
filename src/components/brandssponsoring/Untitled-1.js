import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { GeoAlt, PeopleFill } from "react-bootstrap-icons";

function iconType(type) {
  const style = "mr-1";
  switch (type) {
    case "text":
      return <GeoAlt className={style} color="gray" size={25} />;
    case "number":
      return <PeopleFill className={style} color="gray" size={25} />;

    default:
      return <h1>No project match</h1>;
  }
}

function FormTextInput(props) {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    console.log("true");
    setActive(true);
  };

  const handleActiveEnd = () => {
    console.log("false");
    setActive(false);
  };

  return (
    <div className="flex flex-col mb-2">
      <div className="ml-3 mb-1 text-black">
        <Typography>{props.title}</Typography>
      </div>
      <div
        className={`flex flex-shrink justify-between items-center ease-in-out animation duration-150 bg-white rounded-xl h-15 pl-5 pr-3 pb-3 pt-3 border-2 ${
          active ? "border-yellow-500" : "border-gray-600"
        }`}
      >
        <input
          onFocus={handleActive}
          onBlur={handleActiveEnd}
          type={props.type}
          max={7}
          placeholder={props.placeholder}
          className="focus:outline-none bg-red-500 mt-2 mb-2 mr-2 h-full"
        />
        {iconType(props.type)}
      </div>
    </div>
  );
}

export default FormTextInput;
