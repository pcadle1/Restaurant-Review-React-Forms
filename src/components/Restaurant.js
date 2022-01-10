import React, {useState} from 'react'

const Restaurant = (props) => {

  return(

    <div className={`grid-x grid-margin-x grid-padding-y ${props.className}`} onClick={props.handleClick}>
      <div className="cell">
        <img src={props.data.image} alt={props.data.name} />
      </div>

      <div className="cell">
        <p>
          <a href="#">
            <strong>{props.data.name}</strong>
          </a>
        </p>

        <p>{props.data.location}</p>
      </div>

    </div>
  )
}

export default Restaurant
