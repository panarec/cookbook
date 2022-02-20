import { RecipeCard } from './RecipeCard';
import { CardsList } from './CardsList';
import { Spinner } from 'reactstrap';

export function RecipesList({ recipes, loading }) {
  return (
    <div>
      {loading && (
        <Spinner color="danger" className="spinner">
          Loading...
        </Spinner>
      )}
      <CardsList>
        {recipes.map((recipe, index) => {
          return (
            <RecipeCard
              index={index}
              key={recipe._id}
              title={recipe.title}
              preparationTime={recipe.preparationTime}
              slug={recipe.slug}
              id={recipe._id}
              className={''}
            />
          );
        })}
      </CardsList>
    </div>
  );
}
