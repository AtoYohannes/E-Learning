import React from "react";
import { MdVideoCall, MdReceipt, MdPictureAsPdf, MdHelp } from "react-icons/md";
import { Card, Row, Col, Button } from "reactstrap";
import InstructorImage from "../../../Assets/Nunu.jpg";
import Avatar from "../../../Components/Avatar";

const chapters = [
  { type: "video" },
  { type: "reading" },
  { type: "pdf" },
  { type: "test" },
  { type: "video" },
];

const Body = () => {
  return (
    <div className="singleCourseBodyContainer">
      <h3>Course Insights</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste libero
        laboriosam architecto cumque mollitia eveniet nam, facere quas fugiat a
        commodi laudantium possimus ab aliquam tenetur aut vitae cupiditate.
      </p>
      <h3>Course Structure</h3>
      <hr />
      <h6>The Course Has 5 Chapters</h6>
      <Row>
        {chapters.map((course, index) => {
          return (
            <Col key={index} md={4} sm={6} xs={12}>
              <Card className="chapters">
                <h7>Chapter 1</h7>
                <h6>Basics of The Course</h6>
                <div className="courseType">
                  {course.type === "video" ? <MdVideoCall size={20} /> : null}
                  {course.type === "reading" ? <MdReceipt size={20} /> : null}
                  {course.type === "pdf" ? <MdPictureAsPdf size={20} /> : null}
                  {course.type === "test" ? <MdHelp size={20} /> : null}
                  <h7>Estimated 1hr 30 Minutes</h7>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
      <h3>Your Instructor</h3>
      <hr />
      <div className="instructorContainer">
        <Avatar size={200} src={InstructorImage} />
        <h5>Yohannes Berhanu</h5>
        <h7>PHD in Machine Learning</h7>
        <hr />
        <Button>Enroll for Introduction to Machine Learning</Button>
      </div>
    </div>
  );
};
export default Body;
