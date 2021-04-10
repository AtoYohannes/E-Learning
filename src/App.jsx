import React from "react";
import "./Styles/projectTitle.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const SingleCourse = React.lazy(() => import("./Pages/SingleCourse"));
const Categories = React.lazy(() => import("./Pages/Categories"));
const AllCourses = React.lazy(() => import("./Pages/AllCourses"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="secondary" />
                </div>
              }
            >
              <Route exact path={routes.homePage} component={LandingPage} />
              <Route
                exact
                path={routes.singleCourse}
                component={SingleCourse}
              />
              <Route exact path={routes.allCategories} component={Categories} />
              <Route exact path={routes.allCourses} component={AllCourses} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
