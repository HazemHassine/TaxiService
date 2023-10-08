import React, {useState} from 'react'
import {ArrowRight} from 'react-bootstrap-icons';
    
function LearnMoreButtonYellow() {
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
          className={`relative flex justify-center items-center animation ease-in-out duration-300 hover:bg-black hover:text-white cursor-pointer rounded-full bg-yellow-700 pl-6 pr-4 py-3 bookbutton`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          >
            <p className='font-semibold'>Plus</p>
            <ArrowRight size="20" className='md:ml-4 ml-3'/>
          </div>
        </div>
      )
}

export default LearnMoreButtonYellow;