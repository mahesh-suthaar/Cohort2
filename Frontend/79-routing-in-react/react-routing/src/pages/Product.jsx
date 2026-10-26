import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold underline absolute top-1/4 left-1/2 -translate-x-1/2 text-white'>Product page</h1>
      <Link to='/product/man' className='absolute bottom-1/4 left-1/4 text-2xl text-white font-bold'>Man</Link>
      <Link to='/product/woman' className='absolute bottom-1/4 right-1/4 text-2xl text-white font-bold'>Woman</Link>
    </div>
  )
}

export default Product
