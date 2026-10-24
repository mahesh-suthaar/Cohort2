import axios from "axios"
import { useState } from "react"


function App() {

  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)

  let getImages= async ()=>{
    setloading(true)
    let res= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`)
    console.log(res.data)
    setpage(page+1)
    setdata([...data,...res.data])
    setloading(false)
  }

  return (
    <div>
      <div className="px-5 py-3 flex flex-wrap gap-3 overflow-auto bg-black scrollbar-hidden"  >

        {data.map((elem,idx)=>{
          return <div  key={idx}>
              <img className="h-62 w-62 rounded-2xl border-2 border-emerald-500"
              src={elem.download_url} alt="" />
              <p className="text-white">{elem.author}</p>
          </div>
        })}
      </div>

      <button
      disabled={loading}
      className="px-4 py-2 font-semibold m-2 text-2xl text-white rounded-2xl bg-emerald-600"
      onClick={getImages}>
      {loading?'Loading...':'Get images'}
      </button>
      
    </div>

  )
}

export default App