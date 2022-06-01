import { useState } from 'react'
import Note from './components/Note'

//In order to get our page to update when new notes are added 
// it's best to store the notes in the App component's state. 
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    // default would make page reload and others
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    
    // concat creates new arr with the new noteobject
    setNotes(notes.concat(noteObject))

    //reset newnote field to empty string
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    // target is the controlled input element
    // no need for event.preventDefault() because no default action
    // for input change (onChange)
    console.log(event.target.value)
    setNewNote(event.target.value)
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
          <Note key={note.id} note={note} />
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
