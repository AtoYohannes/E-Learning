import React from "react";
import { MyCourses, PopularCourses, Welcome } from "./components";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <Welcome />
      <MyCourses />
      <PopularCourses />
    </div>
  );
};
export default LandingPage;
