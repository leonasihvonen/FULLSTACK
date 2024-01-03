import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Statistics = (props) => {
    return (
    <div>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    <p>All {props.total}</p>
    <p>Average {props.average}</p>
    <p>Positive {props.positive + '%'}</p>
    </div>
    )
  }

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
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
    setTotal(updatedGood + neutral + bad)
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
    setTotal(good + updatedNeutral + bad)
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
    setTotal(good + neutral + updatedBad)
    setAverage(updatedAverageValues/updatedCalc)
    const updatedPositive = good / (good+neutral+updatedBad) * 100
    setPositive(updatedPositive)
  }

  return (
    <div>
      <Header header="Give feedback"/>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Header header="Statistics"/>
      {total === 0 ? (
        <div>
          The app is used by pressing the buttons above.
          </div>
      ) : (
      <Statistics
      good = {good}
      neutral = {neutral}
      bad = {bad}
      all = {total}
      average = {average}
      positive = {positive}
      />
      )}
    </div>
  )
}

export default App