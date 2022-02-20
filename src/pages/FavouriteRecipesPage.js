import { Container, Spinner } from 'reactstrap';
import { RecipesList } from '../components/RecipeList/RecipesList';
import { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import { useState } from 'react';
import { SearchInput } from '../components/SearchInput';
import { NoResults } from '../components/NoResults';
import { api } from '../api';
import { RecipeSearch } from '../components/RecipeSearch';

export default function FavouriteRecipesPage() {
  const context = useContext(AppContext);
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/recipes')
      .then((response) => {
        setRecipes(
          response.data.filter((item) => {
            return context.favourites.some((fav) => fav === item.slug);
          }),
        );
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [context.favourites]);

  const filterredRecipes = recipes.filter((recipe) => {
    return recipe.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .includes(
        filter
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''),
      );
  });

  return (
    <Container>
      <RecipeSearch
        filter={filter}
        onSetFilter={setFilter}
        heading="Moje obľubené"
        placeholder="Vyhľadať obľubený recept..."
      />
      <RecipesList recipes={filterredRecipes} loading={loading} />
      {filterredRecipes.length === 0 && (
        <NoResults
          heading="Žiaden obľubený recept"
          subHeading="Vyber si nejaký!"
          button="Všetky recepty"
          link="/"
        />
      )}
    </Container>
  );
}
