import React from 'react'
import { useContext } from 'react'
import GlobalData from '../context/GlobalData'

const Card = () => {

  let user = useContext(GlobalData)

  return (
    <div className='h-1/4 bg-gray-600 rounded flex items-center justify-center'>
      <h1 className='text-2xl font-bold text-white'> Welcome: {user} </h1>
    </div>
  )
}

export default Card
