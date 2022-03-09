import React from 'react';
import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import foods from './foods.json';
import Search from './components/Search';

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [showFoodForm, setShowFoodForm] = useState(false)  
  const [foodToRender, setFoodToRender] = useState(foods)
  const [caloriesConsumed, setCaloriesConsumed] = useState([])

  //FUNCTION TO ADD FOOD:
  const addFood = (food) => {
    setFoodList([...foodList, food])
    setFoodToRender([...foodList, food]) 
  }

  //FUNCTION TO SEARCH FOOD:
  const searchFood = (searchQuery) => {
    const filteredFood = foodList.filter((eachFood)=>{
      return eachFood.name.includes(searchQuery)
    })
    setFoodToRender(filteredFood)
  }

  //FUNCTION TO SUM CALORIES CONSUMED:
  const addToCaloriesConsumed = (caloriesToConsume) => {    
    setCaloriesConsumed( [...caloriesConsumed, caloriesToConsume] )
  }

  //FUNCTION TO CALCULATE TOTAL CALORIES CONSUMED:
  const total = caloriesConsumed.reduce((acc, eachFoodCalories)=> {
    return acc + (eachFoodCalories.quantity * eachFoodCalories.calories)
  }, 0)

  //FUNCTION TO DELETE FOOD:
  const deleteFood = (foodName) => {
    const foodListCopy = [...caloriesConsumed]
    foodListCopy.splice(foodName, 1)
    setCaloriesConsumed(foodListCopy)

  }

  return (
    
    <div className="App">

      <h1>IronNutrition:</h1>

      <button className='btn btn-primary btn-lg btnMargin' onClick={()=>setShowFoodForm(!showFoodForm)}>{showFoodForm ? "Hidde Form" : "Show Form"}</button>
      
      {showFoodForm && <AddForm addFood={addFood} />}

      <Search searchFood={searchFood}/>

      <div className="todaysFood" >
      <h3>Today's Foods:</h3>

       {caloriesConsumed.map((eachFoodCalories, index)=> {
         const {name, quantity, calories} = eachFoodCalories
         return <p>{name} : {quantity} x {calories} calories = {quantity * calories} Calories <button onClick={()=> deleteFood(index)}> Delete</button></p>
       })}

      <h4>Total: {total} Calories</h4>
      </div>

      <div className="flexCards">
      {foodToRender.map((eachFood, index)=>{
          return(
            <FoodBox eachFoodProps={eachFood} key={index+eachFood.name} addToCaloriesConsumed={addToCaloriesConsumed} />
          )
      })}
      </div>
            
    </div>
  );
}

export default App;
