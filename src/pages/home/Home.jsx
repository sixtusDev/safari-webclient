import { Row, Col } from "antd";
import items from "../../helpers/items";
import AppCarousel from "../../components/app-carousel/AppCarousel";
import AppCard from "../../components/app-card/AppCard";
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
      <section className="Intro">
        <div className="flex-row space-between align-items-center mb20">
          <div className="Intro__line" />
          <span className="heading1">Shop your style</span>
          <div className="Intro__line" />
        </div>
        <div className="center Intro__text paragraph1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida
          cursus adipiscing viverra at tortor, egestas odio parturient. Morbi ut
          lorem in erat. Et et molestie diam diam ultricies. Scelerisque duis
          diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae
          adipiscing id facilisis.
        </div>
      </section>
      <section className="Products">
        <div className="container">
          <Row gutter={30}>
            {items.map((item) => (
              <Col span={6} className="mb30">
                <AppCard
                  name="Multicolored armless top"
                  price="₦10,000"
                  image={item.image}
                />
              </Col>
            ))}
            {/* <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={6}></Col> */}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Home;
