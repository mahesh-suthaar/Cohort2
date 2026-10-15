import {RiHeartLine} from '@remixicon/react'
import Para from './Para'
import Toggle from './Toggle'

const Card = () => {
  return (
    <div className='card'>
        <RiHeartLine />
      <Para text={<>Professional hard courts <span>with tournament-grade lighting & climate control — play in perfect conditions,</span>  in any season.</>} />
      <Toggle />
    </div>
  )
}

export default Card
