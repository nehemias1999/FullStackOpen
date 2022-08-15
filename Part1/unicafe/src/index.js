import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({title}) => <h1> {title}</h1>

const Button = ({handleClick, buttonName}) => <button onClick={handleClick}>{buttonName}</button>

const Statistic = ({reviewName, reviewValue}) => {
  return (
    <tr>
      <td> {reviewName} </td>
      <td> {reviewValue}</td>
    </tr>
  )
}

const Total = ({totalReviews}) => {
  return (
    <tr>
      <td> all </td>
      <td> {totalReviews}</td>
    </tr>
  )
}

const Average = ({positiveReviews, negativeReviews, totalReviews}) => {
  return (
    <tr>
      <td> average </td>
      <td> {(positiveReviews - negativeReviews) / totalReviews}</td>
    </tr>
  )
}

const PositiveReviews = ({positiveReviews, totalReviews}) => {
  return (
    <tr>
      <td> positive </td>
      <td> {(positiveReviews / totalReviews) * 100} %</td>
    </tr>
  )
}

const Statistics = ({goodValue, neutralValue, badValue, totalReviews}) => {
  if (totalReviews === 0) {
    return (<p> no review given </p>)
  } else {
    return(
      <table>
        <Statistic reviewName="good" reviewValue={goodValue}/>
        <Statistic reviewName="neutral" reviewValue={neutralValue}/>
        <Statistic reviewName="bad" reviewValue={badValue}/>
        <Total totalReviews={totalReviews}/>
        <Average positiveReviews={goodValue} negativeReviews={badValue} totalReviews={totalReviews} />
        <PositiveReviews positiveReviews={goodValue} totalReviews={totalReviews}/>
      </table>
    )
  }
}

const App = () => {
  const [reviewValues, setReviewsValues] = useState({
    goodValue: 0,
    neutralValue: 0,
    badValue: 0
  })

  const handleGoodClick = () => setReviewsValues({ ...reviewValues, goodValue: reviewValues.goodValue + 1 })

  const handleNeutralClick = () => setReviewsValues({ ...reviewValues, neutralValue: reviewValues.neutralValue + 1 })

  const handleBadClick = () => setReviewsValues({ ...reviewValues, badValue: reviewValues.badValue + 1 })

  const totalReviews = (reviewValues.goodValue + reviewValues.neutralValue + reviewValues.badValue)

  return (
    <div>
      <Title title={"give feedback"}/>
      <Button handleClick={handleGoodClick} buttonName={"good"}/>
      <Button handleClick={handleNeutralClick} buttonName={"neutral"}/>
      <Button handleClick={handleBadClick} buttonName={"bad"}/>
      <Title title={"statistics"}/>
      <Statistics goodValue={reviewValues.goodValue} neutralValue={reviewValues.neutralValue} badValue={reviewValues.badValue} totalReviews={totalReviews}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))