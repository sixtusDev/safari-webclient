import { Row, Col, Select } from "antd";
import items from "../../helpers/items";
import AppCard from "../../components/app-card/AppCard";
import Category from "../../components/category/Category";
import ClearBtn from "../../components/clear-btn/ClearBtn";
import { clothCategories, clothSizes, colors } from "../../helpers";

import "./Clothes.scss";

const Clothes = () => {
  return (
    <div className="Clothes">
      <div className="container">
        <h2 className="heading2 mb50">CLOTHES</h2>

        <Row gutter={20} align="top">
          <Col span={6}>
            <div>
              <div className="flex-row" style={{ height: "4rem" }}>
                <h3 className="heading3">CATEGORY</h3>
              </div>
              <hr />
              <Category list={clothCategories} category />
            </div>
            <div>
              <div className="flex-row space-between align-items-center mt30">
                <h3 className="heading3">SIZE</h3>
                <ClearBtn />
              </div>
              <hr />
              <Category list={clothSizes} size />
            </div>
            <div>
              <div className="flex-row space-between align-items-center mt30">
                <h3 className="heading3">COLOR</h3>
                <ClearBtn />
              </div>
              <hr />
              <Category list={colors} color />
            </div>
            <div>
              <div className="flex-row space-between align-items-center mt30">
                <h3 className="heading3">COLOR</h3>
                <ClearBtn />
              </div>
              <hr />
              <Category price />
            </div>
          </Col>
          <Col span={18}>
            <div
              className="flex-row justify-contents-end"
              style={{ height: "4rem" }}
            >
              <Select defaultValue={`Sort By: Most popular`}>
                <Select.Option>Hello</Select.Option>
              </Select>
            </div>
            <div>
              <hr />
            </div>
            <Row gutter={20} className="mt20">
              {items
                .filter((item) => item.type === "cloth")
                .map((item) => (
                  <Col span={6} className="mb30">
                    <AppCard
                      name={item.name}
                      price={item.price}
                      image={item.image}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Clothes;
