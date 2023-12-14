const App = () => {
  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <p>{props.contents}</p>
      </div>
    )
  }
  const Total = (props) => {
    return (
      <div>
        <p>{props.total}</p>
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
  const contents = part1 + ', ' + part2 + ', ' + part3
  const total = exercises1+exercises2+exercises3

  return (
    <div>
      <Header course={course}/>
      <Content contents={contents}/>
      <Total total={total}/>
    </div>
  )
}

export default App