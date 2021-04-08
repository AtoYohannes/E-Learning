import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import CoursesCard from "../../../Components/Card/CoursesCard";

const MyCourses = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const courses = [{}, {}, {}, {}];

  return (
    <div className="myCoursesContainer">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "activepageTab" : "notactivepageTab"}
            onClick={() => {
              toggle("1");
            }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "activepageTab" : "notactivepageTab"}
            onClick={() => {
              toggle("2");
            }}
          >
            In Progress
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "3" ? "activepageTab" : "notactivepageTab"}
            onClick={() => {
              toggle("3");
            }}
          >
            Completed Courses
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="mt-3" activeTab={activeTab}>
        <TabPane tabId="1">
          <h5>Our Most Enrolled Courses</h5>
          <hr />
          <Row>
            {courses.map((course, index) => (
              <Col md={6} sm={12}>
                <CoursesCard index={index} course={course} />
              </Col>
            ))}
          </Row>
          <Col className="mt-2" align="center">
            <Link>See all Courses</Link>
          </Col>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm={12}>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm={12}>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm={12}>
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default MyCourses;
