import React from 'react'
import { useContext } from 'react'
import { ThemeData } from '../context/ThemeContext'


const Section = () => {
  const [theme] = useContext(ThemeData)

  return (
    <div className='flex-1 w-full p-5 text-white flex items-center justify-center'>
      <h1 className='bg-gray-900 p-10 rounded-2xl text-3xl font-bold'>Theme: {theme}</h1>
    </div>
  )
}

export default Section