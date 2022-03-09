import React from 'react'
import {useState} from "react"

function AddForm(props) {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState ("")

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addFood({name, calories, image})
    }

    const handleImageChange = (event) => setImage(event.target.value)

    const handleNameChange = (event) => setName(event.target.value)

    const handleCaloriesChange = (event) => setCalories(event.target.value)

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor="image">Pic:</label>
            <input type="file" name="image" value={image} onChange={handleImageChange} />

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleNameChange} />

            <label htmlFor="calories">Calories:</label>
            <input type="number" name="calories" value={calories} onChange={handleCaloriesChange} />

            <button type="submit">Add Food</button>

        </form>
        
    </div>
  )
}

export default AddForm