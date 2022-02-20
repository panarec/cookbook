import { BiTimeFive } from 'react-icons/bi';
import { Col, Row } from 'reactstrap';
import { IngredientTable } from '../RecipeDetail/IngredientTable';
export function RecipeDetialInfo({ recipeDetials }) {
  const { title, preparationTime, ingredients, servingCount, sideDish } =
    recipeDetials;

  return (
    <div>
      <h1>{title}</h1>

      <h6 className="my-3">
        <BiTimeFive className="mr-2" />
        {preparationTime} min
      </h6>

      {ingredients && (
        <div>
          <h4 className="mt-5">Ingrediencie</h4>
          <IngredientTable ingredients={ingredients} />
        </div>
      )}

      <Row>
        <Col md={6}>
          {servingCount && (
            <h6 className="my-3">Počet porcií: {servingCount}</h6>
          )}
        </Col>
        <Col md={6}>
          {sideDish && <h6 className="my-3">Príloha: {sideDish}</h6>}
        </Col>
      </Row>
    </div>
  );
}
