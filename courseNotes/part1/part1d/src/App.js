import { useState } from 'react'
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   // the ...clicks creates a new object that is copied from clicks
//   // then we use left: / right: to change the particular property
//   const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// handling arrays
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   // allClicks is initialized to an empty array

//   // use concat instead of push, to return a new array
//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

// conditional rendering
// history renders different react elements depending on state of app
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  // allClicks is initialized to an empty array

  // use concat instead of push, to return a new array
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}


export default App;

// we cant do this in react because you cannot mutate state directly
// changing state has to be done by setting state to a new object

// const handleLeftClick = () => {
//   clicks.left++
//   setClicks(clicks)
// }


// we can return a function with the hello function 
// the returned function is the event handler, 
// this is used to customize event handlers easily
{/* <button onClick={hello('react')}>button</button>
const hello = (who) => {
  const handler = () => {
    console.log('hello', who)
  }

  return handler
}

const hello = (who) => () => {
  console.log('hello', who)
} */

// good example of the usage
// const App = () => {
//   const [value, setValue] = useState(10)
  
//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }
  
//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }


//alt of above, not using the function returning a function
// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }



  // Do not define components inside another component!!!
  // const Display = props => <div>{props.value}</div>
  // inside the const app

  