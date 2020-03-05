import React, { Component } from "react";
import { connect } from "react-redux";
import {
  googleSignInStart,
  facebookSignInStart,
  emailSignInStart,
  clearErrors
} from "../../redux/user/user.actions";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import Alert from "../Alert/Alert";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    const { signInError, googleSignInStart, facebookSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2 className="mb-10 mt-10">I already have an account</h2>
        <span className="mb-10">Sign in with your email and password</span>
        {signInError && <Alert type="error" message={signInError} />}
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

const mapStateToProps = state => ({
  signInError: state.user.error
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  facebookSignInStart: () => dispatch(facebookSignInStart()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
