import axios from 'axios'
import { useState } from 'react';
function App() {
 
  const [data ,setData] = useState([])

  let getData= async ()=>{
    let response= await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(response.data)
    console.log(response.data);
    
  }
  

  
  return (
   <div className='h-screen bg-black p-5'>

      <button onClick={getData} className='px-6 py-3 h-fit w-fit font-bold text-2xl text-white bg-red-500 rounded-2xl'>Get Data</button> 

      <div className='flex flex-wrap gap-3 overflow-auto w-full p-5'>
        {data.map((elem,idx)=>{
          return <div className='w-50 h-50 p-4 text-white font-bold rounded-2xl bg-blue-500'>
            <h1 className='mb-5'>{elem.name}</h1>
          </div>
          })}        
      </div>

   </div>
  )
}

export default App
