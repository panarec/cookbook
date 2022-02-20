import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export function RecipeDetailDirections({ recipeDetails }) {
  const { directions } = recipeDetails;
  return (
    <div className="directions">
      <h4 className="mb-3">Postup: </h4>
      <ReactMarkdown>{directions}</ReactMarkdown>
    </div>
  );
}
