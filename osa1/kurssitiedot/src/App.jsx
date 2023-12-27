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


// muuttuja yhteenlasketuille tehtäville
const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;


// muuttuja listalle nimistä
const names = course.parts.map(part => part.name).join(', ');

  const Header = () => {
    return (
        <h1>{course.name}</h1>
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