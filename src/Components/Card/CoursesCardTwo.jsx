import React from "react";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import Image from "../../Assets/WeddingPicture.png";

const CoursesCardTwo = () => {
  return (
    <Card className="courseTwoCard">
      <CardImg src={Image} />
      <CardImgOverlay className="imageOverlay">
        <div className="title">Intoduction to Machine Learning</div>
        <div className="courseBy">University Of Michigan</div>
        <div className="teacher">Yohannes Berhanu</div>
      </CardImgOverlay>
    </Card>
  );
};
export default CoursesCardTwo;
