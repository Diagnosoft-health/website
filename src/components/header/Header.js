import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import Mobile from "./Mobile";

export default function Header() {

    const [clickMenu, setClickMenu] = useState(false);
    const handleClickMenu = () => setClickMenu(!clickMenu);
    const closeMobileMenu = () => setClickMenu(false);

  return (
    <nav className="topnav">
      <div className="header">
        <div className="logo">
          <img src={logo} className="app-logo" alt="app logo" />
        </div>
        

        <div className="menu">
          <ul className="menu-list">
            <li className="option">
              <a href="#patients">for patients</a>
            </li>
            <li className="option">
              <a href="#organization">for organization</a>
            </li>
            <li className="option">
              <a href="#company">company</a>
            </li>
            <li className="link">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>

        <div className={clickMenu ? "hamburger active" : "hamburger"} onClick={ handleClickMenu }>
          <span>Menu</span>
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      
      </div>
      <div className={clickMenu ? "mobile-menu open" : "mobile-menu"}>
      <Mobile closeMobileMenu={closeMobileMenu} clickMenu={clickMenu}/>
      </div>
    </nav>
  );
}
