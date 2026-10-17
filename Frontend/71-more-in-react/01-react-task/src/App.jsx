import React from 'react'
import Card from './components/Card'
import Profiles from './components/ProfilesData'

const App = () => {
     
  return (
    <div className='h-screen px-10 py-5 flex gap-10 overflow-auto flex-wrap justify-center bg-blue-200'>

      {Profiles.map((elem,idx)=>{
        return <Card key={idx} props={elem}/>
      })}

    </div>
  )
}

export default App
