import React, {useState, useRef} from 'react'
import {TaxiFrontFill} from 'react-bootstrap-icons';
import './bookbutton.css'
import { scroller } from 'react-scroll';

function BookButton() {

  const handleClick = () => {
    console.log("Clicked");
    scroller.scrollTo("bookingcontainer", {
      duration: 500,
      delay: 30,
      offset: -130,
      smooth: "easeInOutCubic",
    })
  };
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
  };
 
  return (
    <div>
      <div
      className={`relative flex justify-center items-center animation ease-in-out duration-300 hover:bg-black hover:text-white cursor-pointer rounded-full bg-yellow-700 pl-6 pr-6 py-3 bookbutton`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      onClick={handleClick}
      >
        <TaxiFrontFill className='mr-2'/>
        <p className='font-semibold'>Réserver par formulaire</p>
      </div>
    </div>
  )
}

export default BookButton;