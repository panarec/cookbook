import { Input } from 'reactstrap';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export function RecipeEditDirections({ onSetRecipeDetails, recipeDetails }) {
  return (
    <div>
      <h4 className="mt-3">Postup</h4>

      <Input
        type="textarea"
        rows="10"
        value={recipeDetails.directions || ''}
        onChange={(e) =>
          onSetRecipeDetails({
            ...recipeDetails,
            directions: e.target.value,
          })
        }
      />

      {recipeDetails.directions.length > 0 && (
        <div className="mt-3">
          <h4>Náhľad postupu</h4>
          <div>
            <ReactMarkdown>{recipeDetails.directions}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
