import React from "react";
import { MyCourses, Welcome } from "./components";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <Welcome />
      <MyCourses />
    </div>
  );
};
export default LandingPage;
