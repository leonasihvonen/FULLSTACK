const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const nimi = 'name'
  const parts = part1[nimi] + ', ' + part2[nimi] + ', ' + part3[nimi]


  const sum = (part1, part2, part3) => {
    return part1.exercises + part2.exercises + part3.exercises
  }
  const total = sum(part1, part2, part3)

  const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
  }
  
  const Content = () => {
    return (
      <div>
        <p>Content: {parts}</p>
      </div>
    )
  }
  const Total = () => {
    return (
      <div>
        <p>Total amount of exercises: {total}</p>
      </div>
    )
  }


  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total total = {total}/>
    </div>
  )
}

export default App