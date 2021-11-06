import { Col, Row } from "antd";

import logo from "../../assets/logo.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <Row gutter={20} align="top" justify="space-between">
          <Col span={4}>
            <img className="Footer__logo" src={logo} alt="logo" />
          </Col>
          <Col span={4}>
            <div className="flex-column paragraph3 Footer__links">
              <span>About Us</span>
              <span>Contact</span>
              <span>Terms & Conditions</span>
            </div>
          </Col>
          <Col span={4}>
            <div className="flex-column justify-contents-center paragraph3 Footer__links">
              <span className="flex-row align-items-center">
                <div className="Footer__img-wrapper">
                  <img src={instagram} alt="instagram" className="mr10" />
                </div>
                <span>Instagram</span>
              </span>
              <span className="flex-row align-items-center">
                <div className="Footer__img-wrapper">
                  <img src={facebook} alt="facebook" className="mr10" />
                </div>
                <span>Facebook</span>
              </span>
              <span className="flex-row align-items-center">
                <div className="Footer__img-wrapper">
                  <img src={twitter} alt="twitter" />
                </div>
                <span>Twitter</span>
              </span>
            </div>
          </Col>
          <Col span={6}>
            <div className="flex-column justify-contents-center">
              <span className="paragraph3 mb20">
                Subscribe to our news letter
              </span>
              <div className="Footer__newsletter">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="Footer__input"
                />
                <button className="Footer__button">OK</button>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="Footer__links flex-column justify-contents-center paragraph3">
              <span>23, Cresent Road, Lagos</span>
              <span>+23459490</span>
              <span>mail@email.com</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
