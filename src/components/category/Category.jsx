import { Row, Col, Checkbox } from "antd";
import "./Category.scss";

const Category = ({ list, category, size, color, price }) => {
  return (
    <div className="Filter">
      {category ? (
        list.map((category) => <p className="Filter__category">{category}</p>)
      ) : size ? (
        <Row>
          {list.map((size) => (
            <Col span={6}>
              <p className="Filter__size">{size}</p>
            </Col>
          ))}
        </Row>
      ) : color ? (
        <Row>
          {list.map((color) => (
            <Col span={8}>
              <div className="Filter__color-box">
                <div
                  style={{ backgroundColor: `${color.color}` }}
                  className="Filter__color"
                />
                <span className="Filter__color-label">{color.label}</span>
              </div>
            </Col>
          ))}
        </Row>
      ) : price ? (
        <div>
          <div className="flex-row align-items-center">
            <Checkbox />{" "}
            <span className="Filter__price-label">₦0 - ₦10,000</span>
          </div>
          <div className="flex-row align-items-center">
            <Checkbox />{" "}
            <span className="Filter__price-label">₦10,000 - ₦20,000</span>
          </div>
          <div className="flex-row align-items-center">
            <Checkbox />{" "}
            <span className="Filter__price-label">₦20,000 - ₦50,000</span>
          </div>
          <div className="flex-row align-items-center">
            <Checkbox />{" "}
            <span className="Filter__price-label">₦50,000 - ₦100,000</span>
          </div>
          <div className="flex-row align-items-center">
            <Checkbox />{" "}
            <span className="Filter__price-label">₦100,000 - ₦200,000</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Category;
