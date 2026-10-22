import React from 'react'
import {useState} from 'react'

const App = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [contactCard, setContactCard] = useState([])
   let submitHandler = (e)=>{
      e.preventDefault()
      if(name==='' || phone==='') {alert('Name and phone are mandatory')}
      else{
      let copyCard=[...contactCard]
      copyCard.push({name,phone})
      setContactCard(copyCard)
      
      setName('')
      setPhone('')}
    }
    let deleteCard=(id)=>{
      let copy=[...contactCard]
      copy.splice(id,1)
      setContactCard(copy)
    }

    return(
      <div className="w-full h-screen p-5 flex flex-col gap-4 bg-gray-950">
        <form 
        className="bg-gray-800 p-4 rounded-2xl flex flex-col gap-4 justify-center"
        onSubmit={(e)=>{submitHandler(e)}}>
          <div className="grid grid-cols-2 gap-3">
            <input 
            onChange={(e)=>{setName(e.target.value)}}
            className="text-3xl outline-hidden text-white p-3 rounded-2xl border-2 border-blue-800"
            placeholder="Enter name"
            type="text" 
            value={name}
            />

            <input 
            onChange={(e)=>{setPhone(e.target.value)}}
            className="text-3xl outline-hidden text-white p-3 rounded-2xl border-2 border-blue-800"
            placeholder="Enter phone"
            type="text" 
            value={phone}
            />
          </div>

          <button className="bg-blue-800 font-bold py-3 rounded-2xl text-3xl text-white">Save</button>
        </form>
        <div className="w-full flex flex-col gap-1 h-auto overflow-auto scrollbar-none">
          {contactCard.map((elem,idx)=>{
            // console.log(elem.name);
            return(
              <div key={idx} className="w-full relative rounded first:rounded-t-2xl last:rounded-b-2xl flex gap-4 items-center p-3 bg-gray-800">
                <h1 className="w-15 h-15 bg-blue-800 rounded-full text-white text-3xl font-bold flex items-center justify-center">{elem.name[0].toUpperCase()}</h1>
                <h1 className="text-2xl text-white font-semibold">{elem.name}</h1>
                <button id={idx} onClick={(dets)=>{deleteCard(dets.target.id)}} className="bg-red-600 px-4 py-2 rounded font-bold text-white text-xl absolute top-1/2 -translate-y-1/2 right-3">Remove</button>
              </div>              
            )
            
          })}
        </div>
      </div>
    )

    
  
}

export default App
