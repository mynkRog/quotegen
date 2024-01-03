import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'

const getrandomquote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const App = () => {

  const [quotes, setquotes] = useState([])
  const [quote, setquote] = useState(null)

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((json) => {
      setquotes(json)
      setquote(json[0])
    })
  }, [])
  
const getnewquote = () =>{
  setquote(getrandomquote(quotes))
}

  return (
    <main>
      <h1>Project 3: Quote Generator</h1>
      <section>
        <button onClick={getnewquote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </main>
  )
}

export default App