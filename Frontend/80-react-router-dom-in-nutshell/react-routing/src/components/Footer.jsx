import React from 'react'
import { useNavigate } from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='w-full absolute bottom-0 flex justify-between items-center p-3 bg-gray-400'>
      <p className='text-2xl font-bold'>Footer</p>
      <button onClick={()=>navigate('/product/man')} className='bg-blue-600 text-white rounded px-6 py-3 font-bold text-xl'>Go to Man's products</button>
    </div>
  )
}

export default Footer
