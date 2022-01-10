import React, {useState} from 'react'

const ReviewForm = (props) => {
    const [review, setReview] = useState({
        name: '',
        rating: '',
        content: ''
    })
    const handleChange = (event) => {
        setReview({...review, [event.currentTarget.name]: event.currentTarget.value, restaurant_id: props.selectedRestaurant})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addReview(review)
        setReview({...review, 
            name: '',
            rating: '',
            content: ''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={review.name}/>

            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" onChange={handleChange} value={review.rating}/>

            <label htmlFor="content">Review:</label>
            <textarea id='content' name='content' onChange={handleChange} value={review.content}></textarea>

            <input type="submit"/>
        </form>
    )
}

export default ReviewForm