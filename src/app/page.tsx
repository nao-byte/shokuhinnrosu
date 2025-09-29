// app/page.tsx

'use client';

import { useState } from 'react';
import { recipes, Recipe } from '@/app/data/recipes';
import '@/app/styles/recipe.css';
import RecipeCard from './components/RecipeCard';
import style from './styles/recipe'
import pstyle from './page.module.css'
import { useRouter } from 'next/router';
import { ingredients } from './tapes/ingredient';

export default function Home() {

  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const filteredRecipes = selectedRecipeId
  ? recipes.filter((recipe) => recipe.name === selectedRecipeId)
  : [];
  const selectedRecipe: Recipe | undefined = recipes.find(
    (r) => r.id === selectedRecipeId
  );

   const seenSlugs = new Set<string>();


  const handleRecipeClick = (recipeId: string) => {
    if (selectedRecipeId === recipeId) {
    } else {
    
    }
  };

  const handleClosePopup = () => {
    setSelectedRecipeId(null);
  };

  const App = () => {
  const [name, setName] = useState("");
  const [imageName, setImageName] = useState("");

  const handleClick = () => {
    setName("マーボーナス");
    setImageName("mabo-nasu.png");

  };
}
  return (
    <div className="app-container">
      <h1>ZeroWasteChef</h1>
      <div className='kaba'>
        <button onClick={handleClosePopup} className='fstyles.inish-button'>
        
        <img
        src={`/face.png`} // ★カードには cardImage を使用
      alt={'カバ'}
      className="recipe-"
      height={60}
      ></img>  
        </button> 
        </div>
      <div className="recipe-list">
        {recipes .filter((recipe) => {
    if (seenSlugs.has(recipe.slug)) return false;
    seenSlugs.add(recipe.slug);
    return true;
  }).map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onRecipeClick={handleRecipeClick}
          />
        ))}
      </div> 

    </div>
  );
}