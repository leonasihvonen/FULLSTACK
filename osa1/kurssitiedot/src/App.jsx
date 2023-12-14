const App = () => {
  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <div>
        <p>{props.part}</p>
      </div>
    )
  }
  const Content = () => {
    return (
      <div>
        <Part part={part1 + ', ' + exercises1}/>
        <Part part={part2 + ', ' + exercises2}/>
        <Part part={part3 + ', ' + exercises3}/>
      </div>
    )
  }
  const Total = (props) => {
    return (
      <div>
        <p>Total amount of exercises: {props.total}</p>
      </div>
    )
  }
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1+exercises2+exercises3

  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total total={total}/>
    </div>
  )
}

export default App