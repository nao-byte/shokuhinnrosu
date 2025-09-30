// app/ingredients/[ingredient]/page.tsx

import { MealSummary } from '@/types/meal';
import Link from 'next/link';

interface Props {
  params: {
    ingredient: string;
  };
}

export default async function RecipesByIngredient({ params }: Props) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.ingredient}`
  );
  const data = await res.json();
  const meals: MealSummary[] = data.meals;

  return (
    <div>
      <h1>{params.ingredient} を使ったレシピ</h1>
      <div className="grid">
        {meals.map((meal) => (
          <Link href={`/ingredients/${params.ingredient} /${meal.idMeal}`} key={meal.idMeal}>
            <div className="card">
              <img src={meal.strMealThumb} alt={meal.strMeal} width={150} />
              <h3>{meal.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
