import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import CategoriesCard from "../../../Components/Card/CategoriesCard";
import routes from "../../../Config/routes";

const categories = [{}, {}, {}, {}, {}, {}];

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
      <Col align="center">
        <Link to={{ pathname: routes.allCategories }}>See All Categories</Link>
      </Col>
    </div>
  );
};
export default Categories;
