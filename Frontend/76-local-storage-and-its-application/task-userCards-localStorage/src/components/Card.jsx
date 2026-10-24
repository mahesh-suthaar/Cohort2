import React from 'react'

const Card = ({name,imageUrl,role,desc,remove,id}) => {
  return (
    <div className='w-[20vw] h-[45vh] relative p-5 overflow-hidden flex flex-col items-center gap-5 text-center bg-gray-300 rounded-2xl'>
      <img className='h-20 w-20 rounded-full border-2 border-orange-500 object-cover object-center' src={!imageUrl ? null : imageUrl} alt="" />
      <div className='overflow-hidden'>
        <h1 className='text-2xl text-black font-bold '>{name}</h1>
      </div>
      <h3 className='font-semibold text-green-600 text-sm'>{role}</h3>
      <div className='overflow-hidden w-fit-content h-fit-content'>
        <p>{desc}</p>
      </div>
      <h2 onClick={()=>{remove(id)}} className='h-10 w-10 cursor-pointer rounded-full bg-orange-500 text-xl absolute top-3 right-3 flex items-center justify-center text-white'>X</h2>
    </div>
  )
}

export default Card
