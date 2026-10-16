import React from 'react'
import Card from './Card'

const CardContainer = () => {
  return (
    <div className='h-65 grid gap-4 grid-cols-[2fr_1fr_1fr]'>
      <Card head={'Capital that grows'}para={<> Earn passive income as your stablecoins<br/> are deployed into high-performing Defi<br/> protocols. </>}/>
      <Card className="card2" head={<> Always liquid,<br/>Always stable </>}para={'stay fully dollar-pegged with instant access toyour funds-- no lockups or delays.'}/>
      <Card head={<> 100%<br/>Hands-Free </>}para={'No need to m anage stratagies manually, USD Bloom workd in the background for you.'}/>
    </div>
  )
}

export default CardContainer
