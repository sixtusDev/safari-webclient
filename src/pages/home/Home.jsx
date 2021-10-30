import { Carousel } from "antd";
import heroImage1 from "../../assets/hero-image1.jpg";
import arrowDownIcon from "../../assets/arrow-down-icon.svg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="Hero">
        <div className="Hero__inner">
          <Carousel autoplay dots={{ className: "Carousel__dots" }}>
            <div className="Carousel__image-box Carousel__image-box--1"></div>
            <div className="Carousel__image-box Carousel__image-box--2"></div>
            <div className="Carousel__image-box Carousel__image-box--3"></div>
          </Carousel>
          <div className="Hero__explore">
            <p>Explore our collection</p>
            <img className="Hero__explore-icon" src={arrowDownIcon} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
