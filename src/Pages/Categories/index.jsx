import React from "react";
import { Col, Row } from "reactstrap";
import CategriesCard from "../../Components/Card/CategoriesCard";

const categories = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const Categories = () => {
  return (
    <div className="allCategoriesContainer">
      <h5>All Categories</h5>
      <hr />
      <div className="categoryContainerBody">
        <Row>
          {categories.map(() => (
            <Col md={4} sm={6} xs={12}>
              <CategriesCard />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Categories;
