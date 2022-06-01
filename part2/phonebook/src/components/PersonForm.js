

const PersonForm = ({handleAdd, handleNameChange, handleNumberChange, name, number}) => {
    return (
    <form onSubmit={handleAdd}>
        <div>name: <input value={name} onChange={handleNameChange} /></div>
        <div>number: <input value={number} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
    </form>
    )
}


export default PersonForm