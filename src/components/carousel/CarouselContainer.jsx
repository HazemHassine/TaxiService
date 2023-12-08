import React from 'react'
import CarouselArrow from './CarouselArrow'
import { CarouselWithContent } from './CarouselWithContent'
function CarouselContainer({ subsubsubComponentRef }) {
  return (
    <div className='relative h-fit'>
      <CarouselWithContent/>
    </div>
  )
}

export default CarouselContainer