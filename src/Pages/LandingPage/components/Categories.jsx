import React from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import CategoriesCard from "../../../Components/Card/CategoriesCard";

const categories = [
  {
    color: "light",
  },
  {
    color: "primary",
  },
  {
    color: "success",
  },
  {
    color: "danger",
  },
  {
    color: "warning",
  },
  {
    color: "info",
  },
];

const Categories = () => {
  return (
    <div className="popularCategoriesContainer">
      <CardHeader className="header">
        <h5>Popular Categories</h5>
      </CardHeader>
      <CardBody className="popularCategoriesBody">
        <Row>
          {categories.map(() => (
            <Col md={4} sm={6} xs={12}>
              <CategoriesCard />
            </Col>
          ))}
        </Row>
      </CardBody>
    </div>
  );
};
export default Categories;
