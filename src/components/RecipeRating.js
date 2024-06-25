import React, { useState } from 'react'


function RecipeRating() {
    const [rating, setRating] = useState();

    const handleSetRating = (e) => setRating(e.target.value);
  
    return (
      <>
       <p>Rating:{rating || 'Please select a rating'}</p>
  
        <select onChange={handleSetRating}>
          <option value="">-- Select a rating --</option>
          <option value="4 😋">4 - It's super delicious!</option>
          <option value="3 😀">3 - I'll make it again</option>
          <option value="2 😐">2 - It needs work</option>
          <option value="1 🤢">1 - I'll never make this again</option>
        </select>
      </>
    );
}

export default RecipeRating