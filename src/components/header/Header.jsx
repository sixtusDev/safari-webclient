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
        <span className="Header__nav-link">Home</span>
        <span className="Header__nav-link">Clothes</span>
        <span className="Header__nav-link">Shoes</span>
        <span className="Header__nav-link">Accesories</span>
      </nav>
      <img src={logo} alt="company logo" />
      <div className="Header__cta">
        <div className="Header__search">
          <input type="text" className="Header__search-input" />
          <img src={searchIcon} alt="search icon" />
        </div>
        <img src={profileIcon} alt="heart" />
        <img src={cartIcon} alt="heart" />
        <img src={heartIcon} alt="heart" />
      </div>
    </header>
  );
};

export default Header;
