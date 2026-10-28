import React from 'react'
import { useState } from 'react'


const Nav = (props) => {
    const [newTheme, setNewTheme] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme) //"changeTheme(newTheme)" passes a newTheme as an argument to App.jsx
            setNewTheme('')
            }}>

            <input 
            onChange={(e)=>setNewTheme(e.target.value)}
            className='border-2 rounded text-2xl py-2 px-3 m-2 text-white' 
            placeholder='Enter new theme'
            type="text" 
            value={newTheme} />

            <button 
            type='submit'
            className='bg-emerald-700 py-3 px-6 rounded font-bold text-2xl text-white'
            >Submit</button>
      </form>
    </div>
  )
}

export default Nav
