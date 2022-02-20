import { Link } from 'react-router-dom';
import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';

export function RecipeDetailNavigation({ title }) {
  return (
    <Row>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/" className="homepage-btn">
            Všetky recepty
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{title}</BreadcrumbItem>
      </Breadcrumb>
    </Row>
  );
}
