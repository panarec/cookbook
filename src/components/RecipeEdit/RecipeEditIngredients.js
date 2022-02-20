import { IngredientTable } from '../RecipeDetail/IngredientTable';
import { Input, Button } from 'reactstrap';
import { useState } from 'react';

export function RecipeEditIngredients({ recipeDetails, onSetRecipeDetails }) {
  const [ingredient, setIngredient] = useState({
    isGroup: false,
  });

  function handleDeleteIngredient(name) {
    onSetRecipeDetails({
      ...recipeDetails,
      ingredients: recipeDetails.ingredients.filter(
        (ingredient) => ingredient.name !== name,
      ),
    });
  }

  function handleAddIngredients() {
    onSetRecipeDetails({
      ...recipeDetails,
      ingredients: [...recipeDetails.ingredients, ingredient],
    });
    setIngredient({ ...ingredient, name: '', amount: '', amountUnit: '' });
  }

  return (
    <div>
      <div className="my-5">
        <h4 className="mt-5">Ingrediencie</h4>

        {recipeDetails.ingredients && (
          <IngredientTable
            ingredients={recipeDetails.ingredients}
            onDeleteIngredient={handleDeleteIngredient}
            editMode
          />
        )}
        {recipeDetails.ingredients.length === 0 && (
          <h3>Zatiaľ žiadne ingrediencie</h3>
        )}
      </div>

      <Input
        className="mb-3"
        placeholder="Názov"
        type="text"
        value={ingredient.name || ''}
        name="name"
        onChange={(e) =>
          setIngredient({
            ...ingredient,
            name: e.target.value,
          })
        }
      />

      <Input
        className="mb-3"
        placeholder="Množstvo"
        type="number"
        name="amount"
        value={ingredient.amount || ''}
        onChange={(e) =>
          setIngredient({
            ...ingredient,
            amount: parseInt(e.target.value),
          })
        }
      />

      <Input
        className="mb-3"
        placeholder="Jednotka"
        type="text"
        name="amountUnit"
        value={ingredient.amountUnit || ''}
        onChange={(e) =>
          setIngredient({
            ...ingredient,
            amountUnit: e.target.value,
          })
        }
      />

      <Button
        className="btn_primary  mb-5"
        disabled={ingredient.name?.length < 1}
        onClick={() => handleAddIngredients()}
      >
        Pridať ingredienciu
      </Button>
    </div>
  );
}
