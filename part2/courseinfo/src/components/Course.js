const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {

    const sum = () => {
        const total = parts.reduce((sum, part) => {
            return sum + part.exercises
        },0)
        return total
    }

    return (
        <p>Total Number of exercises {sum()}</p>
    )
}

const Part = ({name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key = {part.id} name={part.name} 
            exercises={part.exercises} />)} 
        </>
    )
}

const Course = ({course}) => {

    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </>
    )
}

export default Course