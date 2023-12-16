const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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


// muuttuja yhteenlasketuille tehtäville
const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;


// muuttuja listalle nimistä
const names = parts.map(part => part.name).join(', ');

  const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
  }
  
  const Content = () => {
    return (
      <div>
        <p>Content: {names}</p>
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
      <Content part = {names}/>
      <Total total = {total}/>
    </div>
  )
}

export default App