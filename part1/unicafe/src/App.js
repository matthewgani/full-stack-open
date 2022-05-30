import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <p>{text}: {value} %</p>
    )
  }
  return (
    <p>{text}: {value}</p>
  )

}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {

  const positive = () => {
    return props.values[0]/(props.values[0] + props.values[1] + props.values[2]) * 100
  }
  const all = () => {
    return props.values[0] + props.values[1] + props.values[2]
  }
  const average = () => {
    return (props.values[0]*1 + props.values[1]*0 + props.values[2]*-1)/
          (props.values[0] + props.values[1] + props.values[2])
  }
  if (props.values[0] + props.values[1] + props.values[2] === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
  return (
      <div>
        <StatisticLine text='good' value ={props.values[0]} />
        <StatisticLine text='neutral' value ={props.values[1]} />
        <StatisticLine text='bad' value ={props.values[2]} />
        <StatisticLine text='all' value ={all()} />
        <StatisticLine text='average' value ={average()} />
        <StatisticLine text='positive' value ={positive()} />
      </div>
    )
  }
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
      <Statistics values={[good, neutral, bad]} />
    </div>
  )
}

export default App
