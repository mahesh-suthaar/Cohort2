import React from 'react'

const Card = ({props}) => {
    let {gender,name,pincode}=props
    
  return (
    <div className={`h-60 w-75 flex flex-col justify-evenly items-center rounded-xl p-3 ${gender=='male'?'bg-blue-200':'bg-pink-200'}`}>
      <h1 className='font-bold text-2xl'>{name}</h1>
      <p className='font-thin text-base/3 py-0.5 mb-3 px-6 border rounded-full'>{gender}</p>
      <h3 className='font-bold text-lg'>Pincode: {pincode} </h3>
    </div>
  )
}

export default Card
