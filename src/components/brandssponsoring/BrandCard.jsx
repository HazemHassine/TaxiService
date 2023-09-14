import React from 'react'

function BrandCard(props) {

    return (
    <div className="opacity-70 hover:opacity-100 ease-in-out transition-all saturate-0 hover:saturate-100 duration-200">
        <img src={props.image} key={props.key} className='h-[100px] w-[100px]'/>
    </div>
  )
}

export default BrandCard