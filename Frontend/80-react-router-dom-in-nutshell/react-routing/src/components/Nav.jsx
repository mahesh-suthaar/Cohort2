import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-18 w-full bg-gray-500 p-5 font-bold text-3xl flex justify-between items-center'>
      <NavLink className={({isActive})=>isActive ? 'active':'deactive'} to='/'>Home</NavLink>
      <NavLink className={({isActive})=>isActive ? 'active':'deactive'} to='/product'>Product</NavLink>
      <NavLink className={({isActive})=>isActive ? 'active':'deactive'} to='/shop'>Shop</NavLink>
      <NavLink className={({isActive})=>isActive ? 'active':'deactive'} to='/contact'>Contact</NavLink>
      {/* <Link to='/product'>Product</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/contact'>Contact</Link> */}
    </div>
  )
}

export default Nav
