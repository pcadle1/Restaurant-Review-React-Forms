import React, { useState } from "react"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"
import reviewData from "../constants/reviews"
import restaurantData from '../constants/restaurants'
import RestaurantList from "./RestaurantList"
import RestaurantForm from './RestaurantForm'

const App = props => {
  const [reviews, setReviews] = useState(reviewData)
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null)

  const addReview = (review) => {
    review.id = _.maxBy(reviews, ele => ele.id).id + 1
    setReviews([...reviews, review])
  }

  const addRestaurant = (restaurant) => {
    restaurant.id = restaurant.name
    setRestaurants([...restaurants, restaurant])
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <RestaurantForm addRestaurant={addRestaurant}/>
          <RestaurantList 
          data={restaurants}
          setSelectedId={setSelectedRestaurantId}
          selected={selectedRestaurantId}/>
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm addReview={addReview} selectedRestaurant={selectedRestaurantId}/>
          </div>
          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList 
            data={reviews} 
            selectedRestaurant={selectedRestaurantId}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
