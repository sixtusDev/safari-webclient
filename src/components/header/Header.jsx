import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import heartIcon from "../../assets/heart-icon.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <span className="Header__nav-link active">Home</span>

        <span className="Header__nav-link">
          <Link to="/clothes">Clothes</Link>
        </span>
        <span className="Header__nav-link">Shoes</span>
        <span className="Header__nav-link">Accesories</span>
      </nav>
      <img className="Header__logo" src={logo} alt="company logo" />
      <div className="Header__cta">
        <div className="Header__search">
          <input
            type="text"
            className="Header__search-input"
            placeholder="Search..."
          />
          <img src={searchIcon} alt="search icon" />
        </div>
        <img className="Header__cta-icon" src={profileIcon} alt="heart" />
        <img className="Header__cta-icon" src={cartIcon} alt="heart" />
        <img className="Header__cta-icon" src={heartIcon} alt="heart" />
      </div>
    </header>
  );
};

export default Header;
