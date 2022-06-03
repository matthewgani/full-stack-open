import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'

//In order to get our page to update when new notes are added 
// it's best to store the notes in the App component's state. 
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  // executed immediately after body of fn is executed first time
  // after rendering
  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
          setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    // default would make page reload and others
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
      // id: notes.length + 1,
    }

    // dont add id above because we should let server generate id
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    // target is the controlled input element
    // no need for event.preventDefault() because no default action
    // for input change (onChange)
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    // const url = `http://localhost:3001/notes/${id}`


    const note = notes.find(n => n.id === id)
    // need to remake note object bc in react we should edit note directly
    const changedNote = { ...note, important: !note.important }
    
    // we use put to update the changed note with a new object
    // we return response.data which is the new object to the setnotes
    // for updating the array
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)
  // can use note.important because it is a true/false boolean


  return (
    <div>
      <h1>Notes</h1>
      <div> 
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} 
          toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
          />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
