import React, { useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import CoursesCard from "../../../Components/Card/CoursesCard";
import Categories from "./Categories";
import Courses from "./Courses";
import RequestingCourses from "./RequestCourses"
import UncompletedCoures from "./UncompletedCourses/"
import Schools from "./Schools";
import Students from "./Students";
import Teachers from "./Teachers";
import NewCourses from "./NewCourses"
import EnrolledCourses from "./EnrolledCourses"
import ApproveRequetedCourses from "./ApproveCourses"
import EditCourses from "./EditCourses"
import { selectUserContent } from "store/States/User"
import { connect } from "react-redux"

const Tabs = ({ userContent }) => {
  const [activeTab, setActiveTab] = useState("0");
  console.log("one", userContent.userData.userType)

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const courses = [{}, {}, {}, {}];

  return (
    <div className="tabsContainer">
      <Nav tabs>
        {
          userContent.userData.userType === "STUDENT" && (
            <NavItem>
              <NavLink
                className={activeTab === "0" ? "activepageTab" : "notactivepageTab"}
                onClick={() => {
                  toggle("0");
                }}
              >
                Requested Courses
          </NavLink>
            </NavItem>
          )
        }
        {userContent.userData.userType === "STUDENT" && (
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("1");
              }}
            >
              New Enrolled Courses
          </NavLink>
          </NavItem>
        )}
        {userContent.userData.userType === "TEACHER" && (
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("2");
              }}
            >
              Uncompleted courses
            </NavLink>
          </NavItem>
        )}
        {userContent.userData.userType === "TEACHER" && (
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("3");
              }}
            >
              New Courses
          </NavLink>
          </NavItem>
        )}
        {userContent.userData.userType === "MANAGER" && (
          <NavItem>
            <NavLink
              className={activeTab === "4" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("4");
              }}
            >
              Schools
          </NavLink>
          </NavItem>
        )}
        {userContent.userData.userType === "MANAGER" && (
          <NavItem>
            <NavLink
              className={activeTab === "5" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("5");
              }}
            >
              Categories
          </NavLink>
          </NavItem>
        )}
        {userContent.userData.userType === "MANAGER" && (
          <NavItem>
            <NavLink
              className={activeTab === "6" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("6");
              }}
            >
              Students
          </NavLink>
          </NavItem>)}
        {userContent.userData.userType === "MANAGER" && (
          <NavItem>
            <NavLink
              className={activeTab === "7" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("7");
              }}
            >
              Teachers
          </NavLink>
          </NavItem>)}
        {userContent.userData.userType === "TEACHER" && (
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("8");
              }}
            >
              Approve Courses
          </NavLink>
          </NavItem>)}
          {userContent.userData.userType === "TEACHER" && (
          <NavItem>
            <NavLink
              className={activeTab === "9" ? "activepageTab" : "notactivepageTab"}
              onClick={() => {
                toggle("9");
              }}
            >
              Edit Courses
          </NavLink>
          </NavItem>)}
      </Nav>
      <TabContent className="mt-3" activeTab={activeTab}>
        <TabPane tabId="0">
          <RequestingCourses />
        </TabPane>
        <TabPane tabId="1">
          <EnrolledCourses />
        </TabPane>
        <TabPane tabId="2">
          <UncompletedCoures courses={courses} />
        </TabPane>
        <TabPane tabId="3">
          <NewCourses />
        </TabPane>
        <TabPane tabId="4">
          <Schools />
        </TabPane>
        <TabPane tabId="5">
          <Categories />
        </TabPane>
        <TabPane tabId="6">
          <Students />
        </TabPane>
        <TabPane tabId="7">
          <Teachers />
        </TabPane>
        <TabPane tabId="8">
          <ApproveRequetedCourses />
        </TabPane>
        <TabPane tabId="9">
          <EditCourses />
        </TabPane>
      </TabContent>
    </div>
  );
};

const mapStateToProps = state => ({
  userContent: selectUserContent(state)
})

export default connect(mapStateToProps)(Tabs);