import { Link } from 'react-router-dom';

export function NoResults({ heading, subHeading, button, link }) {
  return (
    <div className="noresults">
      <h1>{heading}</h1>
      <h3>{subHeading}</h3>
      <Link to={link} className="btn_primary btn">
        {button}
      </Link>
    </div>
  );
}
