import React from 'react'
import Heading from './Heading'
import Para from './Para'

const Card = ({head, para}) => {
  return (
    <div className='card rounded-4xl p-5 bg-[#2a2545] flex flex-col justify-between align-start'>
      <Heading text={head}/>
      <Para text={para} />
    </div>
  )
}

export default Card
