import React from "react";
import Avatar from "../../../Components/Avatar";

const PersonalInfo = () => {
  return (
    <div className="personalInfoContainer">
      <Avatar size={200} />
      <h4>Yohannes Berhanu</h4>
      <small>Student || Teacher || Manager</small>
    </div>
  );
};
export default PersonalInfo;
