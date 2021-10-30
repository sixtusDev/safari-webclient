import { Carousel } from "antd";

import "./AppCarousel.scss";

const AppCarousel = ({ items }) => {
  return (
    <Carousel autoplay dots={{ className: "Carousel__dots" }}>
      {items.map((item) => (
        <div className={`Carousel__image-box Carousel__image-box--${item}`} />
      ))}
    </Carousel>
  );
};

export default AppCarousel;
