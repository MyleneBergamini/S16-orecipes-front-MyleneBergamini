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
    <div className='menu'>
      <h2>Accueil</h2>
      <ul>{recipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
      </ul>
    </div>


  )
}

export default App
