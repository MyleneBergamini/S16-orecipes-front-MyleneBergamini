
import './App.css'

const recipes = [
  {id:1, name:" Cookies au beurre de cacahuète ", difficulty: "facile"},
  {id:2, name: " Macaron framboisier ", difficulty: "difficile" },
  {id:3, name: " Tarte au citron merignuée ", difficulty: "moyen" },
  {id:4, name: " Amandier ", difficulty: "facile" }
];

function App() {


  return (
    <>
    <div className='Container'>
      <div className='menu'>
        <h2>Accueil</h2>
        <ul>{recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
        </ul>
      </div>

      <div className='mainContent'>
        <div className='connexionBar'>
          <input type="email" placeholder='Adresse Email' />
          <input type="password" placeholder='mot de passe' />
          <button>OK</button>
        </div>
     

      <h1>Les recettes oRecipes</h1>
      <p>Voici nos {recipes.length} recettes</p>

      <div className="gridRecipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className='cardRecipe'>
            <h3>{recipe.name}</h3>
            <p>Difficulté : {recipe.difficulty}</p>
            <a href="#" className='btn'>Voir la recette</a>
          </div>
        ))}
      </div> 
      </div>
      </div>
    </>


  )
}

export default App
