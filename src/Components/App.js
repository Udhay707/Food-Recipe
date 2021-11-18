import Axios from "axios";
import React,{useState} from 'react'
import {ID,KEY} from './Login'
import './App.css'
import RecipeTile from "./RecipeTile";
const App = () => {
    const healths=["alcohol-cocktail", 	"alcohol-free", 	"celery-free", 	"crustacean-free", 	"dairy-free", 	"DASH", 	"egg-free", 	"fish-free", 	"fodmap-free", 	"gluten-free", 	"immuno-supportive", 	"keto-friendly", 	"kidney-friendly", 	"kosher", 	"low-potassium", 	"low-sugar", 	"lupine-free", 	"Mediterranean", 	"mollusk-free", 	"mustard-free", 	"No-oil-added", 	"paleo", 	"peanut-free", 	"pecatarian", 	"pork-free", 	"red-meat-free", 	"sesame-free", 	"shellfish-free", 	"soy-free", 	"sugar-conscious", 	"sulfite-free", 	"tree-nut-free", 	"vegan", 	"vegetarian", 	"Wheat-Free"]
    // const healths=["Alcohol-Cocktail", 	"Alcohol-Free", 	"Celery-Free", 	"Crustcean-Free", 	"Dairy-Free", 	"DASH", 	"Egg-Free", 	"Fish-Free", 	"FODMAP-Free", 	"Gluten-Free", 	"Immuno-Supportive", 	"Keto-Friendly", 	"Kidney-Friendly", 	"Kosher", 	"Low Potassium", 	"Low Sugar", 	"Lupine-Free", 	"Mediterranean", 	"Mollusk-Free", 	"Mustard-Free", 	"No oil added", 	"Paleo", 	"Peanut-Free", 	"Pescatarian", 	"Pork-Free", 	"Red-Meat-Free", 	"Sesame-Free", 	"Shellfish-Free", 	"Soy-Free", 	"Sugar-Conscious", 	"Sulfite-Free", 	"Tree-Nut-Free", 	 	"Vegetarian", 	"Wheat-Free"]
    const [dish, setdish] = useState("")
    const [recipies, setrecipies] = useState([])
    const [healthLabel, sethealthLabel] = useState("vegan")
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${dish}&app_id=${ID}&app_key=${KEY}&&health=${healthLabel}`
    const getRecipeInfo=async()=>{
        const result=await Axios.get(url)
        setrecipies(result.data['hits'])
    }
    function searchRecipe(e){
        e.preventDefault();
        getRecipeInfo()
    }
    return (
        <div className="main">
            <h1>Food Recipe Plaza 🍔</h1>
            <form className="main__form">
                <input className= "main_ingredient" type="text" placeholder="Enter Ingredient" name="dish" 
                    onChange={(e)=>{setdish(e.target.value)}}/>
                <input className="main_submit" type="submit" value="Search" onClick={searchRecipe}/>
                <select>
                    <option value="vegan" onClick={()=>{sethealthLabel("vegan")}}>Vegan</option>
                    {
                        healths.map(
                            (health)=>{
                                return <option onClick={()=>{sethealthLabel(health)}}>{health}</option>
                            }
                        )
                    }
                </select>
            </form>
            <div className="main__recipies">
                {
                    recipies.map(
                        (recipe)=>{
                            return <RecipeTile recipe={recipe} />
                        }

                    )

                }
            </div>
        </div>
    )
}

export default App
