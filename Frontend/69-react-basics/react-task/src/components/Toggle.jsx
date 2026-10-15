import React from 'react'
import Label from './Label'

const Toggle = () => {
  return (
    <div className='toggle'>
      <div className='outer'>
        <div className='inner'></div>
      </div>
      <Label text={'Game Mode'} />
    </div>
  )
}

export default Toggle
