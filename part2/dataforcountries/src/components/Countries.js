import {useState} from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Country = ({info, show, btn}) => {
    const [showInfo, setShowInfo] = useState(false)

    // if you do this, can lead to infinite loop because we 
    // re render when we call setshowinfo.
    
    // if (show) {
    //     setShowInfo(true)
    // }

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
            {showInfo ?
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
                </div>
            : null
            }
            {show ? 
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
        return (
            <div>
                <Country key={countriesToShow[0].name.common} info={countriesToShow[0]} show={true} btn={false}/>
            </div>
        )
    }
    else {
        return (
            <div>
                Start by typing something into the filter!
            </div>
        )
    }

}


export default Countries