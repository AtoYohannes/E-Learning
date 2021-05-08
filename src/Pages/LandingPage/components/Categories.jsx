import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardHeader, Col, Row } from "reactstrap";
import CategoriesCard from "../../../Components/Card/CategoriesCard";
import routes from "../../../Config/routes";
import { selectCategories, Fetch, FetchCategories } from "../../../store/States/Categories"
import { connect } from "react-redux"

const categories = [{}, {}, {}, {}, {}, {}];

const Categories = ({ fetchCategories, categories }) => {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return (
    <div className="popularCategoriesContainer">
      <CardHeader className="header">
        <h5>Popular Categories</h5>
      </CardHeader>
      <CardBody className="popularCategoriesBody">
        <Row>
          {categories.map((category) => (
            <Col md={4} sm={6} xs={12}>
              <CategoriesCard categoryName={category.name} />
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
const mapStateToProps = state => ({
  categories: selectCategories(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(Fetch(FetchCategories()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)