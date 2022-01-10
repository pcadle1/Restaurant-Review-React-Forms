import React from 'react'

const Review = (props) => {
  return(
    <div className="mbl">
      <div className="grid-x">
        <div className="cell small-2"><strong> Name </strong></div>
        <div className="cell auto">{props.data.name}</div>
      </div>

      <div className="grid-x">
        <div className="cell small-2"><strong> Score </strong></div>
        <div className="cell auto">{props.data.rating / 100 * 5} stars</div>
      </div>

      <div className="grid-x">
        <div className="cell small-2"><strong> Review </strong></div>
        <div className="cell auto">{props.data.content}</div>
      </div>
    </div>
  )
}

export default Review
