import { useState } from 'react'
import axios from 'axios'


function App() {

  const [notes, setNotes] = useState([])

  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    setNotes(res.data.notes)
  })

  return (
    <div id="notes">
      {notes.map((elem) => {
        return <div id="note">
                  <h1> {elem.tittle}</h1>
                  <h3>{elem.description}</h3>
                </div>
      })}

      <div id="note">
        <h1> tittle</h1>
        <h3>description</h3>
      </div>
    </div>
  )
}

export default App
