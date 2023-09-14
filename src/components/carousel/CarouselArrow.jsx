import React from 'react'
import {ArrowRight, ArrowLeft} from 'react-bootstrap-icons';


function CarouselArrow(props) {
    if (props.right === true) {
        return (
          <div className='m-10 p-3 rounded-full opacity-50 hover:opacity-100 hover:backdrop-blur-50 hover:bg-white cursor-pointer'><ArrowRight size={50}/></div>
          )
    }
    else {
        return   (
        <div className='m-10 md:p-3 rounded-full opacity-50 hover:opacity-100 hover:backdrop-blur-50 hover:bg-white cursor-pointer'><ArrowLeft size={50}/></div>
        )
    }
}

export default CarouselArrow