import React from 'react'

const Card = ({title, hobbie, color}) => {
  return (
    <article style={{backgroundColor: `${color}`}} className='card'>
         <h2>{title}</h2>
      <ul>
        <li>{hobbie[0]}</li>
        <li>{hobbie[1]}</li>
        <li>{hobbie[2]}</li>
        <li>{hobbie[3]}</li>
      </ul>
    </article>
  )
}

export default Card