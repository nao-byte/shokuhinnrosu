// // app/ingredients/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { fetchAllIngredients } from '@/lib/api';
import { Ingredient } from '@/types/meal';
import Link from 'next/link';

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    fetchAllIngredients().then(setIngredients);
  }, []);

  return (
    <div>
      <h1>食材一覧</h1>
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
  );
}
