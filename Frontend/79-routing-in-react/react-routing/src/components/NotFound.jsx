import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='absolute top-1/4 left-1/2 -translate-x-1/2 flex gap-5 flex-col items-center justify-center text-center text-white'>
        <h1 className='font-bold text-3xl '>404 - page not found</h1>
        <p className='text-2xl'>The page your are looking for does not exist</p>
        <Link to='/' className='underline text-2xl font-bold'>Go to home page</Link>
    </div>
  )
}

export default NotFound
