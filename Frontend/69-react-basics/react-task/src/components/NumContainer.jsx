import React from 'react'
import Num from './Num'

const NumContainer = () => {
  return (
    <div className='numcontainer'>
      <Num text={'16000+'}labeltext={'Hours of play annualy'}/>
      <Num text={'91%'}labeltext={'Player retention rate'}/>
      <Num text={'1400+'}labeltext={'Active Members'}/>
      <Num text={'150+'}labeltext={'Annual Tournaments'}/>
    </div>
  )
}

export default NumContainer
