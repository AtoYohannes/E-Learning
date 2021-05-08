import SignIn from "Pages/Auth/SignIn";
import SignUp from "Pages/Auth/SignUp";
import React from "react";

const SlidingDrawer = ({ type, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      {type === "signIn" ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default SlidingDrawer;
