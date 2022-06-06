import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import phoneBookService from './services/phoneBookService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  // executed immediately after body of fn is executed first time
  // after rendering
  useEffect(() => {
    console.log('effect')
    phoneBookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => {
    //     console.log('promise fulfilled')
    //     setPersons(response.data)
    //   })
  }, [])
  console.log('render', persons.length, 'persons')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const temp = persons.map(person => person.name)
    // console.log(temp);
    if (temp.includes(newName)){
      let person = persons.find(person=> person.name === newName)

      if (!window.confirm(`${person.name} is already in the phonebook, replace the old number with a new one?`)) {
        setNewName('')
        setNewNumber('')
        return
      }
      else {
        // update someones phone number
        let personObject = {
          name: person.name,
          number: newNumber,
          id : person.id
          // id: persons.length + 1
        }
        phoneBookService
          .update(person.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person=> person.id !== personObject.id ? person : returnedPerson))
          })
        setNewName('')
        setNewNumber('')
        return
      }
    }

    // adding someone not already in phonebook
    let personObject = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1
    }

    phoneBookService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

    // setPersons(persons.concat(personObject))
    // setNewName('')
    // setNewNumber('')
  }

  const handleDelete = (id) => {
    let person = persons.find(person => person.id === id)
    if (!window.confirm(`Delete ${person.name}?`)) {
      return
    }

    phoneBookService
      .deletePerson(id)
      .then(e => {
        console.log('deleted id', id)
        setPersons(persons.filter(person => person.id !== id))
      })

  }

  const personsToShow = persons.filter(person => {
    let name = person.name.toLowerCase()
    return name.includes(filter)
  })


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter handleChange={handleFilterChange} value={filter}/>
      </div>
      <h2>Add new person</h2>
      <PersonForm handleAdd={handleAdd} handleNameChange = {handleNameChange} 
        handleNumberChange={handleNumberChange} name={newName} number={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleClick = {handleDelete} />
    </div>
  )
}

export default App