import { Container, Alert } from 'reactstrap';
import { RecipesList } from '../components/RecipeList/RecipesList';

import { useState, useEffect, useContext } from 'react';

import { api } from '../api';
import { NoResults } from '../components/NoResults';
import { RecipeSearch } from '../components/RecipeSearch';

import { AppContext } from '../AppContext';

export default function RecipeListPage() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const context = useContext(AppContext);

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

  useEffect(() => {
    api
      .get('/recipes')
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <RecipeSearch
        filter={filter}
        onSetFilter={setFilter}
        heading="Všetky skvelé recepty"
        placeholder="Vyhľadať recept..."
      />
      <RecipesList recipes={filterredRecipes} loading={loading} />
      {filterredRecipes.length === 0 && (
        <NoResults
          heading={'Tento recept tu nemáme :('}
          subHeading={'Pridaj ho!'}
          button={'Pridať recept'}
          link={'/novy-recept'}
        />
      )}
      <Alert
        color="info"
        className={`alert ${context.alertState}`}
        fade={false}
      >
        {context.alertText}
      </Alert>
    </Container>
  );
}
