import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => {

  const positive = () => {
    return props.values[0]/(props.values[0] + props.values[1] + props.values[2]) * 100

  }

  return (
    <div>
      <p>good: {props.values[0]}</p>
      <p>neutral: {props.values[1]}</p>
      <p>bad: {props.values[2]}</p>
      <p>all: {props.values[0] + props.values[1] + props.values[2]}</p>
      <p>
        average: {(props.values[0]*1 + props.values[1]*0 + props.values[2]*-1)/
        (props.values[0] + props.values[1] + props.values[2])}
      </p>
      <p>
        positive: {positive()} %
      </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseValue = (type) => {
    if (type === 'good') {
      setGood(good + 1)
    }
    else if (type ==='neutral') {
      setNeutral(neutral + 1)
    }
    else {
      setBad(bad + 1)
    }
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={()=>increaseValue('good')} text='good' />
      <Button handleClick={()=>increaseValue('neutral')} text='neutral' />
      <Button handleClick={()=>increaseValue('bad')} text = 'bad' />
      <h1>Statistics</h1>
      <Display values={[good, neutral, bad]} />
    </div>
  )
}

export default App