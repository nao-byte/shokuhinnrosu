// import React from 'react';
import { Recipe } from '../data/recipes';
import './RecipeCard.css';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { link } from 'fs';


type RecipeCardProps = {
  recipe: Recipe;
  onRecipeClick: (recipeId: string) => void;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onRecipeClick }) => {
  const handleImageClick = () => {
    const URL = `/recipe/${recipe.slug}`;

};
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);

  const handleTouchStart = () => {
    timerRef.current = setTimeout(() => {
      isDraggingRef.current = true;
      // ドラッグ開始（必要なら何か状態を変える）
      console.log('ドラッグ開始（長押し）');
    }, 500); // 0.5秒 長押ししたらドラッグ開始
  };

  const handleTouchEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (!isDraggingRef.current) {
      // 長押しじゃなかった → タップ扱い
      onRecipeClick(recipe.id);
    }

    // 次の処理のためにリセット
    isDraggingRef.current = false;
  };
  
return (
      <Link href={`/recipe/${recipe.slug}`}>
  <div className="recipe-card">

  <img
      src={`/${recipe.cardImage}`} // ★カードには cardImage を使用
      alt={recipe.name}
      onClick={handleImageClick}
      className="recipe-image"
  />
//       <p>{recipe.name}</p>
//     </div></Link>
);
};
export default RecipeCard;



