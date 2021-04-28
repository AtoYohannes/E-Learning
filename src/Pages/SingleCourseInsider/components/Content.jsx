import React from "react";
import { MdVideoCall } from "react-icons/md";
import { Card } from "reactstrap";

const contents = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const CourseHeader = () => {
  return (
    <Card className="singleCourseInsiderContainer">
      <h5>Course Contents</h5>
      <hr />
      <div className="contents">
        {contents.map(() => (
          <Card className="content">
            <icon>
              <MdVideoCall size={25} />
            </icon>
            <h6>Introduction to the Course</h6>
          </Card>
        ))}
      </div>
    </Card>
  );
};
export default CourseHeader;
