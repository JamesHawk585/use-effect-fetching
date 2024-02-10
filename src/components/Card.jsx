import React, { useEffect, useState } from 'react'

const API = ''

const Card = ({ clickHandler }) => {

    useEffect(() => {
        fetch(API)
        .then((r) => r.json())
        .then(setCount)
    })

    const [count, setCount] = useState()
  return (
    <section className="card">
        <button onClick={clickHandler}></button>
        <h1>Test</h1>
        <p>{count}</p>

    </section>
  )
}

export default Card