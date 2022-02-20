import { Input, FormFeedback } from 'reactstrap';

export function RecipeEditTitle({ recipeDetails, onSetRecipeDetails }) {
  return (
    <div>
      <h1>{recipeDetails.title ? recipeDetails.title : 'Nový recept'}</h1>

      <Input
        className="mt-4"
        invalid={recipeDetails.title.length === 0}
        name="title"
        placeholder="Názov"
        value={recipeDetails.title}
        onChange={(e) =>
          onSetRecipeDetails({
            ...recipeDetails,
            title: e.target.value,
            slug: e.target.value
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase()
              .replaceAll(' ', '-'),
          })
        }
      />

      <FormFeedback>Názov je povinný</FormFeedback>
    </div>
  );
}
