import React from 'react'
import Label from './Label'

const Num = ({text, labeltext}) => {
  return (
    <div className='num'>
      <h2>{text}</h2>
      <Label text={labeltext} />
    </div>
  )
}

export default Num
