const Filter = ({handleChange, value}) => {
    return (
        <div>
            filter by name:<input value={value} onChange={handleChange} />
        </div>
    )
}

export default Filter