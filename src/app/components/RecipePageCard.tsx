// import React from 'react';
import { Recipe } from '../data/recipes';
import './RecipeCard';
import React, { useRef } from 'react';


type RecipePageCardProps = {
  recipe: Recipe;
  onRecipeClick: (recipeId: string) => void;
};

const RecipePageCard: React.FC<RecipePageCardProps> = ({ recipe, onRecipeClick }) => {
  const handleImageClick = () => {
    onRecipeClick(recipe.id);
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
  <div className="recipe-card">
  <img
      src={`/${recipe.popupImage}`} // ★カードには cardImage を使用
      alt={recipe.cardname}
      onClick={handleImageClick}
      className="recipe-image"
  />
//       <p>{recipe.cardname}</p>
<p>{recipe.ingredients}</p>
//     </div>
);
};
export default RecipePageCard;



