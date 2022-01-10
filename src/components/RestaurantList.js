import React, {useState} from 'react'
import Restaurant from './Restaurant'

const RestaurantList = (props) => {
    const restaurants = props.data.map((restaurant) => {

        const handleClick = (event) => {
            props.setSelectedId(restaurant.id)
        }

        let className = ''
        if(props.selected === restaurant.id){
            className = 'selected'
        }
        return <Restaurant
                key={restaurant.id}
                data={restaurant}
                handleClick={handleClick}
                className={className}/>
    })

    return (
        <div>
            {restaurants}
        </div>
    )
}

export default RestaurantList