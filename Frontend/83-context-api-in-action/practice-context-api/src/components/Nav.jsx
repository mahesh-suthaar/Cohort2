import React from 'react'
import { useContext } from 'react'
import { ThemeData } from '../context/ThemeContext'

const Nav = () => {
  const [theme, setTheme] = useContext(ThemeData)
  
  return (
    <div className='bg-gray-700 w-full p-5 text-white text-xl flex items-center justify-between'>
      <h1 className='font-bold'>Navigation</h1>
      <h1>Theme: {theme}</h1>
      <button onClick={()=>{setTheme(theme==='Light'?'Dark':'Light')}} className='font-bold active:scale-[0.99] py-3 px-6 rounded bg-blue-800'>Change Theme</button>
    </div>
  )
}

export default Nav
