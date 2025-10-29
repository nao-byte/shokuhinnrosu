// app/ingredients/page.tsx
'use client';

import { useState } from 'react';
import { ingredientList } from '@/app/data/ingredientList';

export default function IngredientsPage() {
    const [fridge, setFridge] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = (id: string, qty: number) => {
    setFridge((prev) => ({
        ...prev,
        [id]: qty,
    }));
};

    const handleSave = () => {
        const cleaned = Object.fromEntries(
            Object.entries(fridge).filter(([_, qty]) => qty > 0)
    );

    localStorage.setItem('fridge', JSON.stringify(cleaned));
    alert('冷蔵庫に保存しました！');
};

return (
    <div>
        <h1>食材を追加</h1>
        {ingredientList.map((item) => (
        <div key={item.id} className="ingredient-row">
            <img src={`/${item.image}`} alt={item.name} width={50} />
            <span>{item.name}</span>
            <input
            type="number"
            min="0"
            defaultValue="0"
            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
            />
        </div>
        ))}

        <button onClick={handleSave}>冷蔵庫へ保存</button>
    </div>
    );
}
