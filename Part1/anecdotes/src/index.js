import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { createArray, mostVotedQuote } from "./functions"

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Title = ({title}) => <h1> {title}</h1> 

const Display = ({toDisplay}) => <div> {toDisplay}</div>

const Button = ({handleClick, buttonTitle}) => <button onClick={handleClick}> {buttonTitle}</button>

const App = (props) => {  

  const [points, setPoints] = useState(
    createArray(anecdotes.length)
  )

  const copy = [...points]

  const handleVoteClick = () => setPoints(copy, copy[selected] += 1)

  const [selected, setSelected] = useState(0)

  const handleNextClick = () => setSelected(Math.floor(Math.random(0)*(anecdotes.length)))  

  const mostVotedIndex = mostVotedQuote(points)

  return (
    <div>
      <Title title={"anecdote of the day"}/>
      <Display toDisplay={anecdotes[selected]}/>
      <Display toDisplay={" has " + points[selected] + " votes"}/>
      <Button handleClick={handleVoteClick} buttonTitle={"vote"}/>     
      <Button handleClick={handleNextClick} buttonTitle={"next anecdotes"}/>
      <Title title={"anecdotes with the most votes"}/>
      <Display toDisplay={anecdotes[mostVotedIndex]}/>
      <Display toDisplay={" has " + points[mostVotedIndex] + " votes"}/>
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))