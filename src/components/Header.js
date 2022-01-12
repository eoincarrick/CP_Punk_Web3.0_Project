import React from "react";
import "./style/Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="punk-logo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer"></div>
        <img src={searchIcon} alt="searchIcon" />
        <input className="searchInput" placeholder="Collection, item or user" />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerAction">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="theme-icon" />
        </div>
      </div>

      <div className="loginBtn"> GET IT</div>
    </div>
  );
}

export default Header;
