import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import pokedexLogo from "../../assets/pokedex-logo.png";
function Header(props) {
  return (
    <header>
      <div className="poke-header">
        <div className="poke-part poke-header-left">
          <div className="poke-header-volumen">
            <div className="poke-header-volumen-outer">
              <div className="poke-header-volumen-inner" />
            </div>
          </div>
        </div>
        <div className="poke-part poke-header-middle">
          <div className="lights-container">
            <div className="light red-light" />
            <div className="light yellow-light" />
            <div className="light green-light" />
          </div>
        </div>
        <div className="poke-part poke-header-right" />
        <Link to="/" className="header-title-link">
          <h1 className="header-title">Pokédex</h1>
        </Link>
      </div>
    </header>
  );
}
export default Header;
