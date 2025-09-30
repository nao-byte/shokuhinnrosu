// lib/api.ts

import { Ingredient, MealSummary, MealDetail } from '@/types/meal';

/**
 * 全食材の一覧を取得
 */
export async function fetchAllIngredients(): Promise<Ingredient[]> {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const data = await res.json();
  return data.meals;
}

/**
 * 特定の食材を使ったレシピ一覧を取得
 */
export async function fetchMealsByIngredient(ingredient: string): Promise<MealSummary[]> {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await res.json();
  return data.meals || []; // なければ空配列
}

/**
 * レシピの詳細を取得
 */
export async function fetchMealDetailById(id: string): Promise<MealDetail | null> {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
}
