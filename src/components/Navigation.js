import React from "react";
import logo from "../images/logo.png";

const Navigation = () => {
  let nav =
    "menu d-flex text-uppercase fw-bold justify-content-between text-decoration-none list-inline flex-row justify-content-evenly align-items-center";
  return (
    <nav className=" dechirer container-fluid ">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <img className="myLogo" src={logo} alt="logo" />
        </div>

        <div>
          <ul className={nav}>
            <li className="list-group highlight">Home</li>
            <li className="highlight" href="#">
              Menu
            </li>
            <li className="highlight" href="#">
              Our Story
            </li>
            <li className="highlight" href="#">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
