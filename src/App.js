import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () =>{

  const APP_ID = '1179d8c4';
  const APP_KEY = 'dc87bca4709667422f4a244f300f1a00';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`


  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className = "search-bar" type = "text" value = {search} onChange={updateSearch} />
        <button className = "search-button" type = "submit">
          Search</button> 
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
        key ={recipe.recipe.label}
        title ={recipe.recipe.label} 
        calories ={recipe.recipe.calories} 
        image ={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
        healthLabels = {recipe.recipe.healthLabels} 
        source = {recipe.recipe.source}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
