import React from 'react'

function Navitem(props) {
  return (
    <div className='font-semibold cursor-pointer animation ease-in-out duration-300 hover:text-yellow-300'>{props.text}</div>
  )
}

export default Navitem