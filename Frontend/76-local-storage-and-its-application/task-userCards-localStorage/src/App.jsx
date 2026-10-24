import Card from "./components/Card"
import { useState } from "react"

function App() {

  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [role, setRole] = useState('')
  const [desc, setDesc] = useState('')

  let localData = JSON.parse(localStorage.getItem('user-data'))||[]

  const [card, setCard] = useState(localData)

  let save=()=>{

    if(!name||!imageUrl||!role||!desc) alert('All fields are mandatory')
    else{
    let copy=[...card, {name,imageUrl,role,desc}]
    localStorage.setItem('user-data',JSON.stringify(copy))
    setCard(copy)

    setName('')
    setImageUrl('')
    setRole('')
    setDesc('')
    }
  }

  let remove=(id)=>{
    console.log('Card removed')
    let copy=[...card]
    copy.splice(id,1)

    localStorage.setItem('user-data',JSON.stringify(copy))
    setCard(copy)
  }

  return (
    <div className='h-screen bg-black grid grid-cols-[1fr_2fr]'>
      <div className='p-5 flex flex-col items-center justify-start gap-5'>
        <input
        onChange={(e)=>{
          setName(e.target.value)
        }}
        type="text"
        value={name}
        placeholder='Enter name'
        className='w-full outline-hidden p-2 text-2xl text-gray-300 rounded-2xl border-orange-500 border-3' />
        
        <input
        onChange={(e)=>{
          setImageUrl(e.target.value)
        }}
        type="text"
        value={imageUrl}
        placeholder='Enter image url'
        className='w-full outline-hidden p-2 text-2xl text-gray-300 rounded-2xl border-orange-500 border-3' />

        <input 
        onChange={(e)=>{
          setRole(e.target.value)
        }}
        type="text"
        value={role}
        placeholder='Enter role'
        className='w-full outline-hidden p-2 text-2xl text-gray-300 rounded-2xl border-orange-500 border-3' />

        <input 
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        type="text"
        value={desc}
        placeholder='Enter description'
        className='w-full outline-hidden p-2 text-2xl text-gray-300 rounded-2xl border-orange-500 border-3' />

        <button 
        onClick={save}
        className='w-full p-2 text-2xl text-gray-300 rounded-2xl bg-orange-500 font-bold active:scale-99'>
          Save
        </button>
      </div>
      <div className='border-l-5 border-gray-300 p-5 flex flex-wrap gap-3 overflow-auto scrollbar-thumb-orange-500'>
        {card.map((elem,idx)=>{
          
          return ( <Card key={idx} id={idx} remove={remove} {...elem}/>)
        })}
      </div>
    </div>
  )
}

export default App
