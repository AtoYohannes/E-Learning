import React, { useEffect, useState } from "react";
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
import { selectUserContent, getAuthentication } from "store/States/User"
import { connect } from "react-redux"
import { Redirect } from "react-router";

const Tabs = ({ isAuthenticated }) => {
  const [activeTab, setActiveTab] = useState("0");
  const [redirect, setRedirect] = useState("")

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setRedirect("/")
    }
  }, [isAuthenticated])

  const courses = [{}, {}, {}, {}];

  return redirect.length > 0? <Redirect to={redirect} /> : (
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

const mapStateToProps = state => ({
  userContent: selectUserContent(state),
  isAuthenticated: getAuthentication(state)
})

export default connect(mapStateToProps)(Tabs);