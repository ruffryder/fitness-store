import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn.scss";
import { connect } from "react-redux";
import {
  googleSignInStart,
  facebookSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  render() {
    const { googleSignInStart, facebookSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            type="password"
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
            >
              Sign in With Google
            </CustomButton>
            <CustomButton
              type="button"
              isFacebookSignIn
              onClick={facebookSignInStart}
            >
              Sign in With Facebook
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  facebookSignInStart: () => dispatch(facebookSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
