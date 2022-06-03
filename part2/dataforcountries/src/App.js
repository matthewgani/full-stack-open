import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // executed immediately after body of fn is executed first time
  // after rendering
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country => {
    if (filter === "") {
      return false
    }
    
    let name = country.name.common.toLowerCase()
    return name.includes(filter.toLowerCase())
  })


  return (
    <div>
      <div>
        <Filter handleChange={handleFilterChange} value={filter}/>
      </div>

      <div>
        <Countries countriesToShow={countriesToShow} />
      </div>

    </div>
  )
}

export default App
