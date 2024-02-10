import React, { useEffect, useState } from 'react'

const API = ''

const Card = ({ clickHandler }) => {

    // useEffect(() => {
    //     fetch(API)
    //     .then((r) => r.json())
    //     .then(setCount)
    // })

    const [count, setCount] = useState()
  return (
    <section className="card">
        <h2>Test</h2>
        <button onClick={clickHandler}>Click me!</button>
        <p>I'm a card!</p>

    </section>
  )
}

export default Card