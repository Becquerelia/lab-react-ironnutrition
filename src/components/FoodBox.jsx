import React from 'react';
import {useState} from "react"

function FoodBox(props) {

    const {name, calories, image} = props.eachFoodProps

    const [quantity, setQuantity] = useState(0)

    const handleChange = (event) => {
      setQuantity(event.target.value)
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.addToCaloriesConsumed({name, calories, quantity})
    }

  return (
  <div className="box">
     <article className="media">

        <div className="media-left">
            <figure className="image is-64x64">
              <img width="250px" src={image} alt={name} />
            </figure>
        </div>
        
        <div className="media-content">
    
           <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
        </div>
    
        <div className="media-right">
    
           <div className="field has-addons">
             <form onSubmit={handleSubmit} >
                <div className="control">
                  <input className="input" type="number" value={quantity} onChange={handleChange}/>
                </div>
    
                <div className="control">
                  <button className="button is-info"> + </button>
                </div>
              </form>

            </div>
        </div>
    </article>
 </div>
  )
}

export default FoodBox