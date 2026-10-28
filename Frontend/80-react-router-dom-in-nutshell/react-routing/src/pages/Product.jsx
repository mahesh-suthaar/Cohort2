import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className=''>
      <h1 className='text-5xl font-bold underline absolute top-1/4 left-1/2 -translate-x-1/2 text-white'>Product page</h1>
      <Link to="/product/man" className='font-bold text-2xl text-white absolute left-1/4 bottom-1/4'>Man</Link>
      <Link to="/product/woman" className='font-bold text-2xl text-white absolute right-1/4 bottom-1/4'>Woman</Link>
      <Outlet />
    </div>
  )
}

export default Product
