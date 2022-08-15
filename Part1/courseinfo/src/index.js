import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({courseName}) => <h1> {courseName}</h1>

const Part = ({part, numberOfExercises}) => <p> {part} {numberOfExercises}</p>

const Content = ({parts}) => {
  return <>
    <Part part={parts[0].name} numberOfExercises={parts[0].exercises}/>
    <Part part={parts[1].name} numberOfExercises={parts[1].exercises}/>
    <Part part={parts[2].name} numberOfExercises={parts[2].exercises}/>
  </>
}

const Total = ({parts}) => <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
