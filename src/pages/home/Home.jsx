import AppCarousel from "../../components/app-carousel/AppCarousel";
import arrowDownIcon from "../../assets/arrow-down-icon.svg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <section className="Hero">
        <div className="Hero__inner">
          <AppCarousel items={[1, 2, 3]} />
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
