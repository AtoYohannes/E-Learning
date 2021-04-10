import React from "react";
import { Categories, MyCourses, PopularCourses, Welcome } from "./components";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <Welcome />
      <MyCourses />
      <PopularCourses />
      <Categories />
    </div>
  );
};
export default LandingPage;
