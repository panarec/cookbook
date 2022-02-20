import { Container, Row, Col, Form } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';
import { api } from '../api';

import { RecipeEditInfo } from '../components/RecipeEdit/RecipeEditInfo';
import { RecipeEditIngredients } from '../components/RecipeEdit/RecipeEditIngredients';
import { RecipeEditDirections } from '../components/RecipeEdit/RecipeEditDirections';
import { RecipeEditTitle } from '../components/RecipeEdit/RecipeEditTitle';
import { RecipeEditControls } from '../components/RecipeEdit/RecipeEditControls';
import { AppContext } from '../AppContext';

export default function RecipeEditPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const [recipeDetails, setRecipeDetails] = useState({
    title: '',
    directions: '',
    ingredients: [],
    slug: '',
  });
  console.log(useParams());

  function handleSubmitRecipe(e) {
    e.preventDefault();
    if (slug) {
      api
        .post(`/recipes/${recipeDetails._id}`, recipeDetails)
        .then((response) => {
          console.log(response);
          navigate(
            `/recipe/${recipeDetails.slug}`,
            context.handleSetAlert('Recept bol úspešne upravený!'),
          );
        })
        .catch((error) => console.log(error));
    } else {
      api
        .post('/recipes', recipeDetails)
        .then((response) => {
          console.log(response);
          navigate(
            `/recipe/${recipeDetails.slug}`,
            context.handleSetAlert('Recept bol úspešne vytvorený!'),
          );
        })
        .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    if (slug) {
      api
        .get(`/recipes/${slug}`)
        .then((response) => setRecipeDetails(response.data));
    } else {
      console.log('No');
    }
  }, [slug]);

  return (
    <Container>
      <Form
        onSubmit={(e) => handleSubmitRecipe(e)}
        className="recipe-edit-form"
      >
        <Row>
          <Col md={4} className="mb-3 gap-3">
            <RecipeEditInfo
              recipeDetails={recipeDetails}
              onSetRecipeDetails={setRecipeDetails}
            />

            <RecipeEditIngredients
              recipeDetails={recipeDetails}
              onSetRecipeDetails={setRecipeDetails}
            />
          </Col>

          <Col md={8}>
            <div>
              <RecipeEditTitle
                recipeDetails={recipeDetails}
                onSetRecipeDetails={setRecipeDetails}
              />
              <RecipeEditDirections
                recipeDetails={recipeDetails}
                onSetRecipeDetails={setRecipeDetails}
              />
              <RecipeEditControls slug={slug} recipeDetails={recipeDetails} />
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
