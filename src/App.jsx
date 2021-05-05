import React from "react";
import "./Styles/projectTitle.scss";
import { Provider } from "react-redux";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";
import configureStore from "./store/configureStore";
import { load } from "./autoload";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const SingleCourse = React.lazy(() => import("./Pages/SingleCourse"));
const SingleCourseInsider = React.lazy(() =>
  import("./Pages/SingleCourseInsider")
);
const Categories = React.lazy(() => import("./Pages/Categories"));
const AllCourses = React.lazy(() => import("./Pages/AllCourses"));
const Profile = React.lazy(() => import("./Pages/Profile"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

export const store = configureStore();
store.dispatch(load());

function App() {
  return (
    <Provider store={store}>
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
                <Route
                  exact
                  path={routes.allCategories}
                  component={Categories}
                />
                <Route exact path={routes.allCourses} component={AllCourses} />
                <Route exact path={routes.profile} component={Profile} />
                <Route
                  exact
                  path={routes.singleCourseInsider}
                  component={SingleCourseInsider}
                />
              </React.Suspense>
            </MainLayout>
          </React.Fragment>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
