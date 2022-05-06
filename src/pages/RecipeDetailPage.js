import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../api';
import { Container, Row, Alert, Col, Spinner } from 'reactstrap';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { RecipeDetialInfo } from '../components/RecipeDetail/RecipeDetailInfo';
import { RecipeDetailDirections } from '../components/RecipeDetail/RecipeDetailDirections';
import { RecipeDetailControls } from '../components/RecipeDetail/RecipeDetailControls';
import { RecipeDetailNavigation } from '../components/RecipeDetail/RecipeDetailNavigation';
import NotFoundPage from './NotFoundPage';

export default function RecipeDetailPage() {
  const navigate = useNavigate();
  const context = useContext(AppContext);


  const { slug } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
 
  const { title, _id } = recipeDetails;

  useEffect(() => {
    api
      .get(`/recipes/${slug}`)
      .then((response) => {
        setRecipeDetails(response.data);
      })
      .catch((error) => setError(error))
      .finally(setLoading(false))
  }, [slug]);

  const handleDeleteRecipe = () => {
    api
      .delete(`/recipes/${_id}`)
      .then((response) => {
        console.log(response);
        context.setFavourites(
          context.favourites.filter((favourite) => favourite !== slug),
        );
        navigate('/', context.handleSetAlert('Recept bol úspešne zmazaný!'));
      })
      .catch((error) => console.log(error));
  };

  return (
    error ? <NotFoundPage /> : 
    <Container>
      <RecipeDetailNavigation title={title} />

      <Row>
        <Col md={4}>
          <RecipeDetialInfo recipeDetials={recipeDetails} />
        </Col>

        <Col md={8}>
          <RecipeDetailDirections recipeDetails={recipeDetails} />

          <RecipeDetailControls
            slug={slug}
            onDeleteRecipe={handleDeleteRecipe}
          />
        </Col>

        {loading && (
          <Spinner color="danger" className="spinner">
            Loading...
          </Spinner>
        )}
      </Row>

      <Alert
        color="success"
        className={`alert ${context.alertState}`}
        fade={false}
      >
        {context.alertText}
      </Alert>
    </Container>
  );
}
