import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import Image from "../../Assets/BookCover.jpg";
import routes from "../../Config/routes";

const CoursesCardTwo = () => {
  return (
    <Link to={{ pathname: routes.singleCourse }}>
      <Card className="courseTwoCard">
        <CardImg src={Image} />
        <CardImgOverlay className="imageOverlay">
          <div className="title">Intoduction to Machine Learning</div>
          <div className="courseBy">Addis Ababa University</div>
          <div className="teacher">Yohannes Berhanu</div>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};
export default CoursesCardTwo;
