import { useState } from 'react'
import './App.css'

const recipes = [
  { name: " Cookies au beurre de cacahuète ", difficulty: "facile" },
  { name: " Macaron framboisier ", difficulty: "difficile" },
  { name: " Tarte au citron merignuée ", difficulty: "moyen" },
  { name: " Amandier ", difficulty: "facile" }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='menu'>
      <h2>Accueil</h2>
      <ul>{recipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
      </ul>
    </div>

    <div className='mainContent'>
      <div className='connexionBar'>
        <input type="email" placeholder='Adresse Email'/>
        <input type="password" placeholder='mot de passe' />
        <button>OK</button>
      </div>
    </div>

    <h1>Les recettes Orecipes</h1>
    <p>Voici nos {recipes.length} recettes</p>

    <div className="gridRecipes">
      {recipes.map((recipes, index)=> (
        <div key={index} className='cardRecipe'>
          <h3>{recipes.name}</h3>
          <p>Difficulté : {recipes.difficulty}</p>
          <a href="#"className='btn'>Voir la recette</a>
        </div>
      ))}
    </div>
</>
    

  )
}

export default App
