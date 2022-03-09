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

    const style = {
      width:"500px",
      padding: "50px",
      textAlign: "center"
    }

  return (
  <div style={style}>
    <div className="myCard">
      <div >
        <img className="card-img-top" width="250px" src={image} alt={name} />
        <div className="card-body">
         <p className="card-title"><strong>{name}</strong> <br /> <small>{calories}</small></p>
         <div className="card-text">
            <form onSubmit={handleSubmit} >
              <input type="number" value={quantity} onChange={handleChange}/>
              <button > + </button>
            </form>
          </div>
        </div>
      </div>
    </div>    
 </div>
  )
}

export default FoodBox