const Country = ({info}) => {


    const getLanguages = ()=> {
        const languages = Object.entries(info.languages)
        return languages
    }

    const languages = getLanguages()

    return (
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
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Countries = ({countriesToShow}) => {

    const showInfo = (country) => {
        return (
            <div>
                <Country key={country.name.common} info={country}/>
            </div>
        )
    }
    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter!
            </div>
        )
    }
    else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        console.log(countriesToShow);
        return (
            <div>
                {countriesToShow.map(country=> {
                    return (
                        <div>
                            <span key={country.name.common}>{country.name.common}</span>
                            <Button key={country.name.common + 'btn'} handleClick={()=>showInfo(country)} text='show' />
                        </div>
                    )
                })}
            </div>
        )
    }
    else if (countriesToShow.length === 1) {
        return (
            <div>
                <Country key={countriesToShow[0].name.common} info={countriesToShow[0]}/>
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