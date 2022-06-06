const Person = ({person, handleClick}) => {
    return (
      <p>
        {person.name} {person.number} <button onClick={handleClick}>Delete</button>
      </p>
    )
}

const Persons = ({persons, handleClick}) => {
    return ( 
        <div>
        {persons.map(person => <Person key={person.id} person={person}
         handleClick={()=> handleClick(person.id)}/>)}
        </div>
    )
}




export default Persons