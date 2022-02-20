import { Navbar, Container } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import logo from '../images/Logo.svg';
import { NavbarToggler } from './NavbarToggler';

import { useState, useContext, useEffect } from 'react';
import { Collapse } from './Collapse';

import { AppContext } from '../AppContext';

export function Header() {
  const [active, setActive] = useState('');
  const context = useContext(AppContext);
  const [theme, setTheme] = useState(() => {
    let value;
    return (value = localStorage.getItem('darkTheme') === 'true');
  });

  useEffect(() => {
    localStorage.setItem('darkTheme', theme);
    if (theme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const handleToggleNav = () => {
    if (active === '') {
      setActive('active');
      document.body.style = 'overflow: hidden';
    } else {
      setActive('');
      document.body.style = 'overflow: auto';
    }
  };

  return (
    <Navbar className="navbar">
      <Container className="nav">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <ul className="navbar-links">
          <li onClick={() => setTheme(!theme)} className="nav-item">
            {theme ? 'Light' : 'Dark'} Mode
          </li>
          <li>
            <NavLink to="/" className="nav-item">
              Všetky recepty
            </NavLink>
          </li>
          <li>
            <NavLink to="/oblubene" className="nav-item">
              Obľubené{' '}
              {context.favourites.length > 0 && (
                <span className="favourites-count">
                  {context.favourites.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <Link to="/novy-recept" className="btn_primary btn">
              Nový recept
            </Link>
          </li>
        </ul>
        <NavbarToggler onToggleNav={handleToggleNav} active={active} />
        <Collapse active={active}>
          <li
            onClick={() => {
              setTheme(!theme);
              handleToggleNav();
            }}
            className="nav-item"
          >
            {theme ? 'Light' : 'Dark'} Mode
          </li>
          <NavLink to="/" className="nav-item" onClick={handleToggleNav}>
            Všetky recepty
          </NavLink>
          <NavLink
            to="/oblubene"
            className="nav-item"
            onClick={handleToggleNav}
          >
            Obľubené{' '}
            {context.favourites.length > 0 && (
              <span className="favourites-count">
                {context.favourites.length}
              </span>
            )}
          </NavLink>
          <Link
            to="/novy-recept"
            className="btn_primary btn"
            onClick={handleToggleNav}
          >
            Nový recept
          </Link>
        </Collapse>
      </Container>
    </Navbar>
  );
}
