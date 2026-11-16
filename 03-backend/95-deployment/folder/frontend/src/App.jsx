import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editDescription, setEditDescription] = useState("")

  function fetchNotes() {
    axios.get("https://notes-app-s1jg.onrender.com/api/notes")
      .then((res) => setNotes(res.data.notes))
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value

    axios.post("https://notes-app-s1jg.onrender.com/api/notes", { title, description })
      .then(() => {
        fetchNotes()
        e.target.reset()
      })
  }

  function deleteNote(noteId) {
    axios.delete(`https://notes-app-s1jg.onrender.com/api/notes/${noteId}`)
      .then(() => fetchNotes())
  }

  function startEdit(note) {
    setEditingId(note._id)
    setEditDescription(note.description)
  }

  function updateNote(noteId) {
    axios.patch(`https://notes-app-s1jg.onrender.com/api/notes/${noteId}`, {
      description: editDescription
    })
      .then(() => {
        setEditingId(null)
        fetchNotes()
      })
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input name="title" className="title" type="text" placeholder="Enter title" />
        <input name="description" className="description" type="text" placeholder="Enter description" />
        <button className="create">Create Note</button>
      </form>

      <div className="notes">
        {notes.map((elem) => (
          <div key={elem._id} className="note">
            {editingId === elem._id ? (
              <>
                <input value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className='edit-description' />
                <button onClick={() => updateNote(elem._id)} className="save">Save</button>
                <button onClick={() => setEditingId(null)} className='cancel'>Cancel</button>
              </>
            ) : (
              <>
                <h1>{elem.title}</h1>
                <h3>{elem.description}</h3>
                <button onClick={() => startEdit(elem)}className='edit'>Edit</button>
                <button onClick={() => deleteNote(elem._id)} className="delete">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App