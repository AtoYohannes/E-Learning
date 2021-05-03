import { Button } from "reactstrap";
import React from "react";
import { MdApps, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";

const CourseHeader = () => {
  return (
    <div className="singleCourseHeaderContainer">
      <h5>Hawassa University</h5>
      <div className="label">
        <h1>Introduction to Machine Learning</h1>
        <Button>
          <Link to={{ pathname: routes.singleCourseInsider }}>
            <MdApps className="mr-2" />
            Enroll Now
          </Link>
        </Button>
      </div>

      <h6>
        <MdPerson className="mr-2" />
        Yohannes Berhanu
      </h6>
    </div>
  );
};
export default CourseHeader;
