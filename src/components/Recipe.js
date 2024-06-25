import React from 'react'
import RecipeRating from './RecipeRating';


function Recipe({data}) {
    return (
        <div className="card">
          <div>
            <img src={data.strMealThumb} alt={data.strMeal} />
          </div>
          <h2>{data.strMeal}</h2>
          <RecipeRating />
        </div>
      );
}

export default Recipe