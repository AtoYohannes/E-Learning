import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import Image from "../../Assets/WeddingPicture.png";
import routes from "../../Config/routes";

const CoursesCardTwo = () => {
  return (
    <Link to={{ pathname: routes.singleCourse }}>
      <Card className="courseTwoCard">
        <CardImg src={Image} />
        <CardImgOverlay className="imageOverlay">
          <div className="title">Intoduction to Machine Learning</div>
          <div className="courseBy">University Of Michigan</div>
          <div className="teacher">Yohannes Berhanu</div>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};
export default CoursesCardTwo;
