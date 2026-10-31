import React, { useState } from 'react'
import { createContext } from 'react'

export const ThemeData = createContext()

const ThemeContext = (props) => {
    const [theme, setTheme] = useState('Light')

  return (
    <div>
       <ThemeData.Provider  value={[theme,setTheme]}>
           {props.children}
       </ThemeData.Provider>
    </div>
  )
}

export default ThemeContext
