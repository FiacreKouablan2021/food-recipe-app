import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, healthLabels, source}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
            
        ))}
      </ol>
      <p className={style.source}>Author: {source}</p>
      <p>{calories} Calories</p>
      <img className={style.image} src = {image} alt = "" />
      <p className={style.healthLabel}>
        {healthLabels}
      </p>
     

    </div>
  )
}

export default Recipe
