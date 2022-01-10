import React, {useState} from 'react'
import ErrorList from './ErrorList'
import _ from 'lodash'
const RestaurantForm = (props) => {
    const [restaurant, setRestaurant] = useState({
        name: '',
        location: '',
        description: '',
        categories: [],
        image: '',
        website: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setRestaurant({...restaurant, [event.currentTarget.name]:event.currentTarget.value })
    }
    const handleCategories = (event) => {
        setRestaurant({...restaurant, categories: [event.currentTarget.value]})
    }

    const validForSubmission = () => {
        let submitErrors = {}
        const requiredFields = ["name", "location", 'description', 'image', 'website']
        requiredFields.forEach(field => {
        if (restaurant[field].trim() === "") {
            submitErrors = {
            ...submitErrors,
            [field]: "is blank"
            }
        }
        })
        setErrors(submitErrors)
        return _.isEmpty(submitErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(validForSubmission()){
                props.addRestaurant(restaurant)
                setRestaurant({...restaurant,        
                name: '',
                location: '',
                description: '',
                categories: '',
                image: '',
                website: ''})
        }else{

        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <ErrorList errors={errors} />
            <label htmlFor="name"> Restaurant Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={restaurant.name}/>

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" onChange={handleChange} value={restaurant.location}/>

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" onChange={handleChange} value={restaurant.description}/>

            <label htmlFor="categories">Category:</label>
            <input type="text" id="categories" name="categories" onChange={handleCategories} value={restaurant.categories}/>

            <label htmlFor="image">Image Link:</label>
            <input type="url" id="image" name="image" onChange={handleChange} value={restaurant.image}/>

            <label htmlFor="website">Website:</label>
            <input type="url" id="website" name="website" onChange={handleChange} value={restaurant.website}/>

            <input type="submit"/>
        </form>
    )
}

export default RestaurantForm