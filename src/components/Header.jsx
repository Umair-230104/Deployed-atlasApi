import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLogo = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    color: #00b4d8;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background-color: #ffffff;
    margin: 4px 0;
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;

    &.active {
      border-bottom: 2px solid #00b4d8;
    }

    &:hover {
      color: #00b4d8;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.5rem 0;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NavLogo to="/">Atlas API</NavLogo>
      <BurgerMenu onClick={() => setMenuOpen(!isMenuOpen)}>
        <span style={{ transform: isMenuOpen ? "rotate(45deg)" : "rotate(0)" }}></span>
        <span style={{ opacity: isMenuOpen ? "0" : "1" }}></span>
        <span style={{ transform: isMenuOpen ? "rotate(-45deg)" : "rotate(0)" }}></span>
      </BurgerMenu>
      <NavLinks isOpen={isMenuOpen}>
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
