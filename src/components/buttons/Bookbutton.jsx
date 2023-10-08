import React, {useState} from 'react'
import {TaxiFrontFill} from 'react-bootstrap-icons';
import './bookbutton.css'


function BookButton(props) {
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
      >
        <TaxiFrontFill className='mr-2'/>
        <p className='font-semibold'>Réserver un Taxi</p>
      </div>
    </div>
  )
}

export default BookButton