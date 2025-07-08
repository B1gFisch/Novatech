import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import logo from "../../images/novatech-logo3.png";
import "./nav.style.css";
import Button from "../button/button.component";
// @ts-ignore
import BurgerIcon from "../../icons/navbar/bars-solid.svg";
import RightNav from "./rightNav/rightNav.component";

function NavComponent() {
  const [isRightNavOpen, setRightNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    setRightNavOpen(false);
  };

  const toggleRightNav = () => {
    setRightNavOpen(!isRightNavOpen);
  };

  return (
      <header>
        <nav className="nav-container">
          <div className="logo-container" onClick={() => handleClick("/")}>
            <img src={logo} alt="NovaTech Logo" />
          </div>
          <div className="page-button-container">
            <Button onClick={() => handleClick("/")}>Home</Button>
            <Button onClick={() => handleClick("/about")}>Über Uns</Button>
            <Button onClick={() => handleClick("/services")}>Leistungen</Button>
            <Button onClick={() => handleClick("/solutions")}>Lösungen</Button>
            <Button onClick={() => handleClick("/feedback")}>Feedback</Button>
          </div>
          <div className="hamburger-Icon" onClick={toggleRightNav}>
            <div className="icon-container">
              <img src={BurgerIcon} alt="Burger Icon" />
            </div>
          </div>
        </nav>
        {isRightNavOpen && (
            <RightNav handleClick={handleClick} closeRightNav={() => setRightNavOpen(false)} />
        )}
      </header>
  );
}

export default NavComponent;
