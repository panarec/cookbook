import placeholder from '../../images/placeholder2.jpg';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardImg } from './CardImg';
import { CardSubtitle } from './CardSubtitle';
import { CardTitle } from './CardTitle';

import { BiTimeFive } from 'react-icons/bi';
import { CardBadges } from './CardBadges';

export function RecipeCard({
  slug,
  title,
  preparationTime,
  children,
  id,
  index,
}) {
  return (
    <Card className={index === 0 && 'featured'}>
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} />
      </Link>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          <BiTimeFive className="mr-2" />
          {preparationTime}
        </CardSubtitle>
      </CardBody>
      {children}
      <CardBadges slug={slug} index={index} />
    </Card>
  );
}
