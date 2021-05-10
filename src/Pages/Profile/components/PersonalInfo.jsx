import React, { useEffect, useState } from "react";
import Avatar from "../../../Components/Avatar";
import { selectUserContent } from "store/States/User"
import { connect } from "react-redux"

const PersonalInfo = ({ userContent }) => {
  const [userInfo, setUserInfo] = useState({
    _id: "", firstName: "", lastName: "", userType: "", image: ""
  })

  useEffect(() => {
    if (userInfo._id !== String(userContent.userData._id)) {
      setUserInfo(userContent.userData)
    }
  }, [userContent, setUserInfo])

  return (
    <div className="personalInfoContainer">
      <Avatar size={200} src={userInfo.image} />
      <h4>{userInfo.firstName + " " + userInfo.lastName}</h4>
      <small>{userInfo.userType}</small>
    </div>
  );
};

const mapStateToProps = state => ({
  userContent: selectUserContent(state)
})

export default connect(mapStateToProps)(PersonalInfo);
