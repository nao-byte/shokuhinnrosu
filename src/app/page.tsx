"use client";

import { useState, useEffect } from "react";
import { recipes, Recipe } from "@/app/data/recipes";
import "@/app/styles/recipe.css";
import RecipeCard from "./components/RecipeCard";
import style from "./styles/recipe";
import pstyle from "./page.module.css";
import { fetchAllIngredients } from '@/lib/api';
import { Ingredient } from '@/types/meal';
import Link from 'next/link';

export default function Home() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]); // ✅ 追加
  const filteredRecipes = selectedRecipeId
    ? recipes.filter((recipe) => recipe.name === selectedRecipeId)
    : [];
  const selectedRecipe: Recipe | undefined = recipes.find(
    (r) => r.id === selectedRecipeId
  );

  const seenSlugs = new Set<string>();

  const handleRecipeClick = (recipeId: string) => {
    setSelectedRecipeId(recipeId === selectedRecipeId ? null : recipeId);
  };

  const handleClosePopup = () => {
    setSelectedRecipeId(null);
  };

  // ✅ useEffect 内に fetch を追加
  useEffect(() => {
    fetchAllIngredients().then(setIngredients);
  }, []);

  return (
    <div className="app-container">
      <h1>ZeroWasteChef</h1>

      <div className="kaba">
        <button onClick={handleClosePopup} className="fstyles.inish-button">
          <img
            src={`/face.png`}
            alt={"カバ"}
            className="recipe-"
            height={60}
          />
        </button>
      </div>

      {/* レシピ一覧 */}
      <div className="recipe-list">
        {recipes
          .filter((recipe) => {
            if (seenSlugs.has(recipe.slug)) return false;
            seenSlugs.add(recipe.slug);
            return true;
          })
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              position="top"
              onRecipeClick={handleRecipeClick}
            />
          ))}
      </div>

      {/* 食材一覧 */}
      <div>
        <div className="grid">
          {ingredients.slice(0, 20).map((ingredient) => (
            <Link
              href={`/ingredients/${ingredient.strIngredient}`}
              key={ingredient.idIngredient}
            >
              <div className="card">
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                  alt={ingredient.strIngredient}
                  width={100}
                />
                <h3>{ingredient.strIngredient}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
