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

  return (
    
    <div className="App">

      <h1>IronNutrition:</h1>

      <button onClick={()=>setShowFoodForm(!showFoodForm)}>{showFoodForm ? "Hidde Form" : "Show Form"}</button>
      
      {/*<AddForm setFoodList={setFoodList} foodList={foodList}/>*/}
      {showFoodForm && <AddForm addFood={addFood}/>}

      <Search searchFood={searchFood}/>

      {foodToRender.map((eachFood, index)=>{
          return(
            <FoodBox eachFoodProps={eachFood} key={index+eachFood.name} addToCaloriesConsumed={addToCaloriesConsumed} />
          )
      })}

      <h3>Today's Foods:</h3>

       {caloriesConsumed.map((eachFoodCalories)=> {
         const {name, quantity, calories} = eachFoodCalories
         return <p>{name} : {quantity} x {calories} € = {quantity * calories} Calories</p>
       })}

      <h4>Total: {total} Calories</h4>
      
    </div>
  );
}

export default App;
