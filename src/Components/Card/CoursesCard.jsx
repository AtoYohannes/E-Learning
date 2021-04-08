import React from "react";
import { Button, Card, CardBody, CardFooter } from "reactstrap";

const CoursesCard = () => {
  return (
    <Card className="coursesCardContainer">
      <CardBody className="coursesCard">
        <div>
          <header>Introduction To Microsoft Dynamics</header>
          <tag>New</tag>
        </div>
        <div>
          <Button>Go to Course</Button>
        </div>
      </CardBody>

      <CardFooter className="courseFooter">
        <h6>Hawassa University</h6>
        <small>Yohannes Berhanu</small>
      </CardFooter>
    </Card>
  );
};
export default CoursesCard;
