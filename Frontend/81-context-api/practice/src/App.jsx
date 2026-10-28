import React from 'react'
import Nav from './components/Nav'
import { useState } from 'react'

const  App = () => {

  const [theme, setTheme] = useState('Light')

  function changeTheme(newtheme){
    setTheme(newtheme)
  }

  return (
    <div className='w-full h-screen bg-gray-600 p-5'>

      <h1 className='text-2xl font-bold text-white'>Your theme is: {theme}</h1>
      <Nav changeTheme={changeTheme} />

    </div>
  )
}

export default App
