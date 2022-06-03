const Filter = ({handleChange, value}) => {
    return (
        <div>
            Find countries:<input value={value} onChange={handleChange} />
        </div>
    )
}

export default Filter