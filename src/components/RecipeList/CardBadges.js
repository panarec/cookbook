import { AppContext } from '../../AppContext';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillStar, AiFillHeart } from 'react-icons/ai';

export function CardBadges({ slug, index }) {
  const context = useContext(AppContext);
  const [show, setShow] = useState('');

  useEffect(() => {
    if (context.favourites.some((item) => item === slug)) {
      setShow('show');
    } else {
      setShow('');
    }
  }, [context.favourites, slug]);

  return (
    <div className="badges">
      <div
        className={`badge favourite ${show}`}
        onClick={() => context.handleAddFavouriteRecipe(slug)}
      >
        {show === 'show' ? <AiFillHeart /> : <AiOutlineHeart />} Obľubené{' '}
      </div>
      {index === 0 && (
        <div className="badge featured">
          <AiFillStar /> Odporúčané
        </div>
      )}
    </div>
  );
}
