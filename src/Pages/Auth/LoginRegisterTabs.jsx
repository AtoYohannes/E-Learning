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
import Login from "./SignIn"
import Register from "./SignUp"

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("0");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const courses = [{}, {}, {}, {}];

  return (
    <div className="tabsContainer">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "0" ? "activepageTab" : "notactivepageTab"}
            onClick={() => {
              toggle("0");
            }}
          >
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "activepageTab" : "notactivepageTab"}
            onClick={() => {
              toggle("1");
            }}
          >
            Register
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="mt-3" activeTab={activeTab}>
        <TabPane tabId="0">
          <Login />
        </TabPane>
        <TabPane tabId="1">
          <Register />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;