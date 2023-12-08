import React, {useState} from 'react'
import {TelephoneFill} from 'react-bootstrap-icons';

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
          <a
          className={`relative flex justify-center items-center animation ease-in-out duration-300 hover:bg-black hover:text-white cursor-pointer rounded-full bg-white pl-6 pr-6 py-3`}
          href="tel:+21629478308"
          >
            <TelephoneFill size="15" className='mr-3 md:mr-4 sm:mr-3'/>
            <p className='font-semibold'>Réserver par téléphone</p>
          </a>
        </div>
      )
}

export default LearnMoreButton;