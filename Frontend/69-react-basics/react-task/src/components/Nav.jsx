import Label from './Label.jsx'
import Button from './Button.jsx'
import {RiArrowRightUpLine} from '@remixicon/react'

const Nav = () => {
  return (
    <div className='nav'>
      <h2>Horizon Courts</h2>
      <div>
        <Label text={'About Us'}/>
        <Label text={'Services'}/>
        <Label text={'Coaches'}/>
        <Label text={'Events'}/>
        <Label text={'Contacts'}/>
      </div>
      <Button text={'Book Now'} icon={<RiArrowRightUpLine size="1em"/>} />
    </div>
  )
}

export default Nav
