import React from 'react';
import Button from "../../button/button.component";
import { RightNavProps } from "./rightNav.props";
import "./rightNav.style.css";

const RightNav = ({ handleClick, closeRightNav }: RightNavProps) => {
  const handleButtonClick = (path: string) => {
    handleClick(path);
    closeRightNav();
  };

  return (
      <div className="right-nav-container show-right-nav">
        <div className="right-nav-content">
          <Button onClick={() => handleButtonClick("/")}>Home</Button>
          <Button onClick={() => handleButtonClick("/about")}>Über Uns</Button>
          <Button onClick={() => handleButtonClick("/services")}>Leistungen</Button>
          <Button onClick={() => handleButtonClick("/solutions")}>Lösungen</Button>
          <Button onClick={() => handleButtonClick("/feedback")}>Feedback</Button>
        </div>
      </div>
  );
};

export default RightNav;
