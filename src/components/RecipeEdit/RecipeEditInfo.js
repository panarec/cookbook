import { Label, InputGroup, Input, InputGroupText } from 'reactstrap';

export function RecipeEditInfo({ recipeDetails, onSetRecipeDetails }) {
  return (
    <div>
      <h4>Základné údaje</h4>

      <Label for="preparationTime" className="mt-3">
        Doba prípravy
      </Label>

      <InputGroup>
        <Input
          name="preparationTime"
          value={recipeDetails.preparationTime || ''}
          type="number"
          onChange={(e) =>
            onSetRecipeDetails({
              ...recipeDetails,
              preparationTime: parseInt(e.target.value),
            })
          }
        />

        <InputGroupText>min</InputGroupText>
      </InputGroup>

      <Label for="servingCount" className="mt-3">
        Počet porcií
      </Label>

      <Input
        type="number"
        name="servingCount"
        value={recipeDetails.servingCount || ''}
        onChange={(e) =>
          onSetRecipeDetails({
            ...recipeDetails,
            servingCount: parseInt(e.target.value),
          })
        }
      />

      <Label for="sideDish" className="mt-3">
        Príloha
      </Label>

      <Input
        type="text"
        name="sideDish"
        value={recipeDetails.sideDish || ''}
        onChange={(e) =>
          onSetRecipeDetails({
            ...recipeDetails,
            sideDish: e.target.value,
          })
        }
      />
    </div>
  );
}
