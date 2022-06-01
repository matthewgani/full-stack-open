import { useState } from 'react'


const Person = ({name}) => {
  return (
    <p>
      {name}
    </p>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleAddName = (event) => {
    event.preventDefault()
    const temp = persons.map(person => person.name)
    // console.log(temp);
    if (temp.includes(newName)){
      alert(`${newName} is already added to phonebook`)
      return
    }
    let personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App