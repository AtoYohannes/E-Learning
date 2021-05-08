import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, CardHeader } from "reactstrap";
import routes from "../../Config/routes";

const CategoriesCard = ({ categoryName }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      to={{ pathname: routes.allCourses }}
    >
      <Card className="categories">
        <CardHeader className="header">{categoryName}</CardHeader>
        <div className="header">
          <MdArrowForward />
        </div>
      </Card>
    </Link>
  );
};
export default CategoriesCard;
