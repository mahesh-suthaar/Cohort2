import axios from "axios"
import { useEffect, useState } from "react"


function App() {

  const [user, setuser] = useState('')
  const [num, setnum] = useState(0)
  const [loading, setloading] = useState(false)

  let getUser= async ()=>{
    setloading(true)
    let res = await axios.get(`https://randomuser.me/api/`)
    console.log(res.data.results[0].name.first)

    setuser(res.data.results[0].name.first+' '+res.data.results[0].name.last)
    setloading(false)
  }

  useEffect(function(){
    getUser()
  },[num])

  return (
    <div >
        <h1 className="text-white text-3xl">{user}</h1>
        <h1 className="text-4xl text-white font-bold m-3" >{num}</h1>
        <button 
        className="bg-red-400 m-3 px-4 py-2 rounded-2xl font-bold text-2xl text-white"
        onClick={()=>{setnum(num+1)}}
        disabled={loading}>
        {loading?'Loading':'Change'}
        </button>
      
    </div>

  )
}

export default App