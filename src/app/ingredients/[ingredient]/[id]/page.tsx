// app/recipe/[id]/page.tsx

import { fetchMealDetailById } from "@/lib/api";
import { MealDetail } from "@/types/meal";

interface Props {
  params: {
    id: string;
  };
}

export default async function RecipeDetailPage({ params }: Props) {
  const recipe: MealDetail | null = await fetchMealDetailById(params.id);

  if (!recipe) {
    return <div>レシピが見つかりません</div>;
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width={300} />
      <h2>材料</h2>
      <ul>
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {ingredient} - {measure}
            </li>
          ) : null;
        })}
      </ul>
      <h2>作り方</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
