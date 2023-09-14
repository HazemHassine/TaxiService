import React, {useState} from 'react'
import {ArrowRight} from 'react-bootstrap-icons';
    
function LearnMoreButton() {
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
          className={`relative flex justify-center items-center animation ease-in-out duration-300 hover:bg-yellow-700 hover:text-black cursor-pointer rounded-full bg-white pl-6 pr-4 py-3 bookbutton`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          >
            <p className='font-semibold'>Learn More</p>
            <ArrowRight size="20" className='md:ml-4 sm:ml-3'/>
          </div>
        </div>
      )
}

export default LearnMoreButton;