// app/page.tsx

'use client';

import { useState,use } from 'react';
import { recipes, Recipe } from '@/app/data/recipes';
import '@/app/styles/recipe.css';
import RecipePageCard from '@/app/components/RecipePageCard';
import style from '@/app/styles/recipe.css'
import pstyle from './page.module.css'
import { ingredients } from '@/app/tapes/ingredient';
import { useRouter } from 'next/navigation';
import  '@/app/globals.css';

interface RecipePageProps{
  params: {
    ingredient: ingredients
  }
}
export default function RecipePage({ params }: { params: Promise<{ ingredient: string }> }) {
  const { ingredient } = use(params); 
  const filtereRecipes = recipes.filter(recipe => recipe.slug === ingredient);
  const router = useRouter();
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const filteredRecipes = selectedRecipeId
  ? recipes.filter((recipe) => recipe.name === selectedRecipeId)
  : [];
  const selectedRecipe: Recipe | undefined = recipes.find(
    (r) => r.id === selectedRecipeId
  );



  const handleRecipeClick = (recipeId: string) => {
    if (selectedRecipeId === recipeId) {
      setSelectedRecipeId(null);
    } else {
      setSelectedRecipeId(recipeId);
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
      <h1>recipe</h1>
      <button onClick={() => router.back()} className='next-button'>
  {/* style={{
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  }} */}
  ← 戻る
</button>

      <div className="recipe-list">
        {recipes
        .filter(recipe => recipe.slug === ingredient)
        .map((recipe) => (
          <RecipePageCard
            key={recipe.id}
            recipe={recipe}
            onRecipeClick={handleRecipeClick}
          />
        ))}
      </div> 
      {selectedRecipe && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={handleClosePopup} className="close-button">
              閉じる
            </button>
            
            <img 
              src={`/${selectedRecipe.popupImage}`}
              alt={selectedRecipe.name} 
              className="popup-image" 
            />
            <div className="image-container"> 
            <h2 className="recipe-title">{selectedRecipe.cardname}</h2>
            </div>
              constructor(parameters) {   
              }
              {filteredRecipes.map((recipe) => (
            <div key={recipe.id}>
            <h2>{recipe.cardname}</h2>
            </div>
            ))}

            <h3>材料</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}className='popup-material'>{ingredient}</li>
              ))}
            </ul>
            <h3>作り方</h3>
            <ol>
              {selectedRecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}