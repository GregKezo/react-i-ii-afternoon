import React from 'react'


const Person = (props) => {
  const pers = props.person
  
  return(

    <div className="person-info">
      <h1 id="person-name">{pers.name.first} {pers.name.last}</h1>
      <div className="logistic-info">
        <h2><span>From: </span>{pers.city}, {pers.country}</h2>
        <h2><span>Job Title: </span>{pers.title}</h2>
        <h2><span>Employer: </span>{pers.employer}</h2>
      </div>
      <div className="dem-movies">
        <h2>Favorite Movies:</h2>
        <ol>
          {pers.favoriteMovies.map((e, ind) => <li key={ind}>{ind+1}. {e}</li>)}
        </ol>
      </div>

    </div>

  )
}




export default Person