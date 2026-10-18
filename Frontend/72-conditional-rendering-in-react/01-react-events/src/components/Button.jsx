import React from 'react'

const Button = () => {

    function handleClick(){
        alert('Button in clicked')
    }

  return (
    <div className='bg-black h-screen'>
      <button onClick={handleClick} className='bg-blue-400 text-white rounded m-4 active:scale-[.97] py-3 px-6 font-semibold text-xl'>Click Me</button>
    </div>
  )
}

export default Button
