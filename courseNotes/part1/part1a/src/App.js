// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   // not html, this is JSX which is a way to write JS. 
//   //JSX under the hood is compiled by Babel into JS
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//         <br />
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// we use props to pass data to components
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// using hello component inside the app component
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="George" />
      <Hello name="Daisy" />
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App

//notes

// use the console to view errors easily
// use console.log to debug
// all component names in React must be capitalized, 
  // this makes react create a div element defined in the 'App' component

// content of react component usually needs to contain one root element like the outermost div in App
// either root element or return an array of components

// const App = () => {
//   return [
//     <h1>Greetings</h1>,
//     <Hello name="Maya" age={26 + 10} />,
//     <Footer />
//   ]
// }

// can wrap elements in fragments (empty element) as the root element
// to remove the div element
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }