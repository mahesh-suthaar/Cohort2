import React from 'react'
import Logo from './Logo'
import Link from './Link'
import Button from './Button'

const Nav = () => {
  return (
    <div className='w-full px-4 flex items-center justify-between'>
      <Logo />
      <div className="flex gap-4 items-center">
        <Link text={'USD Bloom'} />
        <Link text={'Business'} />
        <Link text={'Treasury'} />
        <Link text={'Developers'} />
        <Link text={'Join Us'} />
      </div>
      <Button text={'Launch Beta'} />
    </div>
  )
}

export default Nav
