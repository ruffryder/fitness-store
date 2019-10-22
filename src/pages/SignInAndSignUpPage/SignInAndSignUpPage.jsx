import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SignInAndSignUpPage.scss";

function SignInAndSignUpPage() {
  return (
    <>
      <h1 className="sign-in-and-sign-up-title">
        Sign in into your account or create a new one
      </h1>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
}

export default SignInAndSignUpPage;
