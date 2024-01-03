import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}

const Statistics = (props) => {
    return (
    <div>
    <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive + '%'} />
    </div>
    )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [averageValues, setAverageValues] = useState(0)
  const [calc, setCalc] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updatedAverageValues = averageValues + 1
    setAverageValues(updatedAverageValues)
    const updatedCalc = calc + 1
    setCalc(updatedCalc)
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    setAverage(updatedAverageValues/updatedCalc)
    const updatedPositive = updatedGood / (updatedGood+neutral+bad) * 100
    setPositive(updatedPositive)
  }

  const handleNeutralClick = () => {
    const updatedAverageValues = averageValues + 0
    setAverageValues(updatedAverageValues)
    const updatedCalc = calc + 1
    setCalc(updatedCalc)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
    setAverage(updatedAverageValues/updatedCalc)
    const updatedPositive = good / (good+updatedNeutral+bad) * 100
    setPositive(updatedPositive)
  }

  const handleBadClick = () => {
    const updatedAverageValues = averageValues - 1
    setAverageValues(updatedAverageValues)
    const updatedCalc = calc + 1
    setCalc(updatedCalc)
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
    setAverage(updatedAverageValues/updatedCalc)
    const updatedPositive = good / (good+neutral+updatedBad) * 100
    setPositive(updatedPositive)
  }

  return (
    <div>
      <Header header="Give feedback"/>
      <Button
      handleClick={handleGoodClick}
      text = 'good'/>
      <Button
      handleClick={handleNeutralClick}
      text = 'neutral'/>
      <Button
      handleClick={handleBadClick}
      text = 'bad'/>
      <Header header="Statistics"/>
      {all === 0 ? (
        <div>
          The app is used by pressing the buttons above.
          </div>
      ) : (
      <Statistics
      good = {good}
      neutral = {neutral}
      bad = {bad}
      all = {all}
      average = {average}
      positive = {positive}
      />
      )}
    </div>
  )
}

export default App