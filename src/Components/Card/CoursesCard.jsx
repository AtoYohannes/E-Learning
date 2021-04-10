import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import routes from "../../Config/routes";

const CoursesCard = () => {
  return (
    <Card className="coursesCardContainer">
      <CardBody className="coursesCard">
        <div>
          <header>Introduction To Microsoft Dynamics</header>
          <tag>New</tag>
        </div>
        <Link to={{ pathname: routes.singleCourse }}>
          <Button>Go to Course</Button>
        </Link>
      </CardBody>
      <CardFooter className="courseFooter">
        <h6>Hawassa University</h6>
        <small>Yohannes Berhanu</small>
      </CardFooter>
    </Card>
  );
};
export default CoursesCard;
