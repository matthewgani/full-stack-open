// const Hello = ({ name, age }) => {
//   //In JavaScript,
//   //defining functions within functions is a commonly-used technique.

//   //const { name, age } = props

//   // const bornYear = () => {
//   //   const yearNow = new Date().getFullYear()
//   //   return yearNow - props.age
//   // }
//   // const bornYear = () => {
//   //   return new Date().getFullYear() - age
//   // }

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App;


//page re rendering portion
// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App

//stateful component portion
// import { useState } from 'react'

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   //setcounter is a fn to modify the state
//   //counter starts with initial state 0

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   // when setcounter is called, react re renders the component 
//   // which re execute the function body of the component
//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }

// export default App

//event handling portion
// import { useState } from 'react'
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }


//   // return (
//   //   <div>
//   //     <div>{counter}</div>
//   //     <button onClick={() => setCounter(counter + 1)}>
//   //       plus
//   //     </button>
//   //     <button onClick={() => setCounter(0)}> 
//   //       zero
//   //     </button>
//   //   </div>
//   // )

//   // defining event handler within jsx template (only if they r simple)
//   const increaseByOne = () => setCounter(counter + 1)
  
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>
//         plus
//       </button>
//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
//   // value of onClick attr is a reference to the fn


// }

// export default App

/* {<button onClick={setCounter(counter + 1)}> 
  plus
</button> }*/
// this will break application without even buttn click too many re renders bc of infinite loop
// this is because the event handler is a function call instead of a fn or a fn reference
// react calls setcounter(0+1) which re renders it which calls again and again


// passing state to child components
// in react components should be small and reusable 
// we refactor to smaller components
import { useState } from 'react'
const Display = ({ counter }) => <div>{counter}</div>


// set the event handler here
// i guess it can refer to the function in App (ancestor)
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
// can remove the () because we only return 1 thing


// when btn is clicked, app is re rendered which re renders all children
// this is because the event handler changes the state of the App component
// with the setCounter function
const App = () => {
  // usestate hook create app state and set initial counter val to 0
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}
export default App