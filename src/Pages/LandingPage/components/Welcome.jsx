import React, { useState, useEffect } from "react";
import { selectUserContent } from "store/States/User"
import { connect } from "react-redux"

const Welcome = ({ userContent }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "", lastName: ""
  })
  useEffect(() => {
    setUserInfo(userContent.userData)
  }, [userContent])

  return (
    <div className="welcomeContainer">
      <h1>Welcome, {userInfo.firstName + " " + userInfo.lastName}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  userContent: selectUserContent(state)
})

export default connect(mapStateToProps)(Welcome)
