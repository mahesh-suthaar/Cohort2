import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-18 w-full bg-gray-500 p-5 font-bold text-3xl flex justify-between items-center'>
      <Link to='/'>Home</Link>
      <Link to='/product'>Product</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Nav
