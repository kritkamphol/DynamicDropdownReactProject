import React, { useState } from "react";
import "./App.css"
import MenuData from "./data/MenuData";
import DropdownComponent from "./components/DropdownComponent";
import FoodComponent from "./components/FoodComponent";
export default function App() {
  const [foods,setFoods]=useState(MenuData)
  const changeFoodData=(e)=>{
    const category = e.target.value
    if(category==="เมนูทั้งหมด"){
      setFoods(MenuData)
    }else{
      const result = MenuData.filter((e)=>{
      return e.menu==category
    })
  setFoods(result);
  }
  }
  return (
    <div classname="container">
      <DropdownComponent changeFoodData ={changeFoodData}/>
      <div className="content">
        {foods.map((data,index)=>{
          return <FoodComponent key={index} {...data}/>
        })}
      </div>
      
    </div>
  );
}
