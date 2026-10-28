import React from 'react'
import {Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col text-center items-center justify-center gap-5'>
      <h1 className='text-5xl font-bold text-red-500'>404 -  page not found</h1>
      <p className='text-2xl text-red-500'>the page you are looking for does not exists</p>
      <Link to='/' className='underline text-2xl text-red-500 font-bold '>Go to home page</Link>  
    </div>
  )
}

export default NotFound
