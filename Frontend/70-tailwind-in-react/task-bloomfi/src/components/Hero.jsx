import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Para from './Para'
import Heading from './Heading'

const Hero = () => {
  return (
    <div className="w-full mt-10 text-[#2a2545] flex flex-col justify-start gap-5 rounded-2xl h-150 p-10 text-center items-center bg-[#c7c1e6] ">
      <Logo />
      <Heading text={'Where Money Grows'} />
      <Para text={<> A programmable, utility-driven stable token<br/> designed for native value accrual and semaless<br/> inegration into DeFi. </>} />
      <Button text={'Try it Now'} />
    </div>
  )
}

export default Hero
