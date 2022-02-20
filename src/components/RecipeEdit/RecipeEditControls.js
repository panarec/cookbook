import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
export function RecipeEditControls({ recipeDetails, slug }) {
  return (
    <div className="mt-4 d-flex justify-content-end gap-2">
      <Link className="btn_primary btn" to={slug ? `/recipe/${slug}` : '/'}>
        Zrušiť
      </Link>

      <Button
        type="submit"
        className="btn_secondary"
        disabled={recipeDetails.title.length < 1}
      >
        Uložiť recept
      </Button>
    </div>
  );
}
