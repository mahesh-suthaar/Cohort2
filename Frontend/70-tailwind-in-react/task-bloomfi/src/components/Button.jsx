import React from 'react'

const Button = ({text}) => {
  return (
    <div>
    <button className='rounded-full font-sans font-medium text-base flex gap-1 text-white p-[8px_22px] bg-[#2a2545]'>{text}</button>
    </div>
  )
}

export default Button
