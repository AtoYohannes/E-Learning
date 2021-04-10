import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Card, CardHeader } from "reactstrap";

const CategoriesCard = () => {
  return (
    <Card className="categories">
      <CardHeader className="header">Technology</CardHeader>
      <div className="header">
        <MdArrowForward />
      </div>
    </Card>
  );
};
export default CategoriesCard;
