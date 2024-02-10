import React, { useEffect, useState } from 'react'

// const API = ''

const Card = ({ clickHandler, color }) => {

    // console.log(color)


    // useEffect(() => {
    //     fetch(API)
    //     .then((r) => r.json())
    //     .then(setCount)
    // })

  return (
    <section className="card">
        <h2>{color}</h2>
        <button onClick={() => clickHandler(color)}>Click me!</button>
        <p>I'm a card!</p>

    </section>
  )
}

export default Card