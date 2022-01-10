import React from 'react'

import Review from "./Review"

const ReviewList = (props) => {
  const reviews = props.data.map((review) => {
    if(props.selectedRestaurant === review.restaurant_id){
    return <Review 
            data={review}
            key={review.id}/>
    }
  })

  return(
    <div>
      {reviews}
    </div>
  )
}

export default ReviewList
