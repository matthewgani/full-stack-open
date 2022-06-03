import { useState, useEffect } from 'react'
import axios from 'axios'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Weather = ({info}) => {

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    // if i have not loaded the info from openweather
    if (isEmpty(info)) {
        return (
            <></>
        )
    }

    let icon = info.weather[0].icon
    
    return (
        <>
            <p>Temperature: {Math.round((info.main.temp - 273.15) * 100) / 100} Celcius</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Country flag"></img>
            <p>Wind: {info.wind.speed} m/s</p>
        </>
    )
}

const Country = ({info, show, btn}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [weather, setWeather] = useState({})

    // if you do this, can lead to infinite loop because we 
    // re render when we call setshowinfo.
    
    // if (show) {
    //     setShowInfo(true)
    // }

    const API_key = process.env.REACT_APP_API_KEY
    const lat = info.latlng[0]
    const lng = info.latlng[1]

    // cannot use this in a if else loop
    // maybe couldve moved to weather component 
    // or put if else in the .then function
    // for less api calls 
    useEffect(() => {
        console.log('effect')
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`)
          .then(response => {
            console.log('promise fulfilled country')
            setWeather(response.data)
          })
      }, [lat, lng, API_key])
    console.log(weather)

    const getLanguages = ()=> {
        const languages = Object.entries(info.languages)
        return languages
    }

    const languages = getLanguages()


    const toggleButton = () => {
        let newState = !showInfo
        setShowInfo(newState)
    }
    
    return (
        <div>
            {btn ?
                <div>
                    <span key={info.name.common}>{info.name.common} </span>
                    <Button key={info.name.common + 'btn'} handleClick={toggleButton} text='show' />
                </div>
                : null
            }
            {showInfo || show ?
                <div>
                    <h1>{info.name.common}</h1>

                    <div>
                        <p>Capital: {info.capital}</p>
                        <p>Area: {info.area}</p>
                    </div>

                    <h2>Languages:</h2>

                    <ul>
                        {languages.map(language => 
                            <li key={language[1]}>{language[1]}</li>
                        )}
                    </ul>

                    <img style={{border:'1px solid black'}} src={info.flags.png} alt="Country flag"></img>
                    
                    <h2>Weather in {info.name.common}</h2>
                    <Weather info={weather} />

                </div>
            : null
            }
        </div>
    )


}


const Countries = ({countriesToShow}) => {

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter!
            </div>
        )
    }
    else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        return (
            <div>
                {countriesToShow.map(country=> 
                    <Country key={country.name.common} info={country} show={false} btn={true} />    
                )}
            </div>
        )
    }
    else if (countriesToShow.length === 1) {
        console.log(countriesToShow)
        return (
            <div>
                <Country key={countriesToShow[0].name.common} info={countriesToShow[0]} show={true} btn={false}/>
            </div>
        )
    }
    else {
        return (
            <div>
                Start by typing something valid into the filter!
            </div>
        )
    }

}


export default Countries