import React from 'react'

const RecipeTile = ({recipe}) => {
    return (
        recipe['recipe']['image'].match(/\.(jpeg|jpg|png|gif)$/)!=null&&
        <div className="tile" onClick={()=>{
            window.open(recipe['recipe']['url'])
        }}>
            
            <img src={recipe['recipe']['image']} alt="dish"></img>

            <h4>{recipe['recipe']['label']}</h4>
        </div>
    )
}

export default RecipeTile
