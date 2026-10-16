import Button from './Button'
import Para from './Para'
import Heading from './Heading'

import React from 'react'

const Whatis = () => {
  return (
    <div className=" whatis w-full h-50 mt-10 grid grid-cols-2 grid-rows-2">
      <Heading className="font-light" text={'What is USD Bloom?'}/>
      <Para text={' USD Bloom is a yield-bearing stablecoin thathelps your capital grow while staying pegged to the U.S dollar.'} />
      <Button text={'Explore Now'}/>
    </div>
  )
}

export default Whatis
