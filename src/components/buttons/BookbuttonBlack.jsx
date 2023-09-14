import React, { useState } from "react";
import { TaxiFrontFill } from "react-bootstrap-icons";
import "./bookbutton.css";

function BookButtonBlack(props) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };

  return (
      <div
        className={`relative flex justify-center items-center animation ease-in-out duration-300  bg-black hover:bg-white hover:text-black text-white cursor-pointer rounded-full py-3 bookbutton`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
      >
        <TaxiFrontFill color={hovered ? `black` : `white`} className="mr-2" />
        <p className="font-semibold">Book a Taxi</p>
      </div>

  );
}

export default BookButtonBlack;
