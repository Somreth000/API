import React from 'react'
import "./Cart.css"
const Card = ({title, date, des, img}) => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{des}</p>
      <button>View Book</button>
    </div>
  )
}

export default Card;