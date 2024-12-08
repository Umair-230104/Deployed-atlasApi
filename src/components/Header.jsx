import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #1c1c1c; /* Dark gray matching the logo's background */
  color: #ffffff; /* White text for contrast */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Shadow for depth */
  font-family: 'Roboto', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLogo = styled(Link)`
  color: #ffffff; /* White text for the logo */
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  img {
    height: 40px; /* Logo height */
    margin-right: 10px; /* Spacing between the logo and text */
  }

  &:hover {
    color: #00b4d8; /* Light blue hover effect */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #ffffff; /* White for text */
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0;

    &.active {
      border-bottom: 2px solid #00b4d8; /* Light blue for active link */
    }

    &:hover {
      color: #00b4d8; /* Light blue for hover effect */
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLogo to="/">
        Atlas API
      </NavLogo>  

      <NavLinks>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/Countries">Countries</NavLink>
        <NavLink to="countries/name/:name">Name</NavLink>
        <NavLink to="/Countries/currency/:currency">Currency</NavLink>
        <NavLink to="/Countries/language/:language">Language</NavLink>
        <NavLink to="/Countries/capital/:capital">Capital</NavLink>
        <NavLink to="/Countries/region/:region">Region</NavLink>
        <NavLink to="/Countries/drivingside/:drivingside">Driving Side</NavLink>
        <NavLink to="/Countries/top-population">Top Population</NavLink>
        <NavLink to="/Countries/lowest-population">Lowest Population</NavLink>
        <Link to="/api-docs">API Documentation</Link>
        
      </NavLinks>
    </Nav>
  );
};

export default Header;
