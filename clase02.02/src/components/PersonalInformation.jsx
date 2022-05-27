import React from 'react'

const PersonalInformation = ({person, title}) => {

  console.log(person) 

  return (
    <ul className='personalInformation' >
        <h3>{title}</h3>
        <li><b>Name: </b>{person.name}</li>
        <li> <b> Age: </b>{person.age}</li>
        <li><b>Movie: </b>{person.favoriteMovie}</li>
        <li><b>Music: </b>{person.favoriteMusic}</li>
    </ul>
  )
}

export default PersonalInformation