import { Image } from "antd";
import heart from "../../assets/heart.png";
import cartIcon2 from "../../assets/cart-icon2.svg";

import "./AppCard.scss";

const AppCard = ({ name, price, image }) => {
  return (
    <div className="AppCard">
      <div className="flex-column align-items-center">
        <div className="AppCard__image-wrapper mb20">
          <Image className="AppCard__image" src={image} preview={false} />
          <div className="AppCard__cta">
            <img className="icon" src={heart} alt="heart icon" />
            <div className="AppCard__button">
              <span className="mr10">ADD TO CART</span>{" "}
              <img src={cartIcon2} alt="cart icon" />{" "}
            </div>
          </div>
        </div>
        <p className="paragraph2">{name}</p>
        <p className="paragraph2">{price}</p>
      </div>
    </div>
  );
};

export default AppCard;
