import React, { Component } from "react";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import Alert from "../Alert/Alert";
import "./SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      displayNameValid: true,
      email: "",
      emailValid: true,
      password: "",
      passwordValid: true,
      confirmPassword: "",
      confirmPasswordValid: true,
      formValid: false,
      errorMessage: {}
    };
  }

  validateField = name => {
    switch (name) {
      case "displayName":
        this.validateDisplayName();
        break;
      case "email":
        this.validateEmail();
        break;
      case "password":
        this.validatePassword();
        break;
      case "confirmPassword":
        this.validateConfirmPassword();
        break;
      default:
        return;
    }
  };

  validateDisplayName = () => {
    const { displayName } = this.state;
    let displayNameValid = true;
    let errorMessage = { ...this.state.errorMessage };
    if (displayName.length < 3) {
      displayNameValid = false;
      errorMessage.displayName = "Display name must be at least 3 characters";
    }

    this.setState({ displayNameValid, errorMessage }, this.validateForm);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMessage = { ...this.state.errorMessage };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMessage.email = "Invalid email format";
    }
    this.setState({ emailValid, errorMessage }, this.validateForm);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMessage = { ...this.state.errorMessage };
    /*
      1. Password must be at least 6 characters long
      2. Password must contain a number
      3. Password must contain a special character: !@#$%^&*'
    */
    if (password.length < 6) {
      passwordValid = false;
      errorMessage.password = "Password must be at least 6 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMessage.password = "Password must contain a digit";
    } else if (!/[!@#$%^&*()]/.test(password)) {
      passwordValid = false;
      errorMessage.password =
        "Password must contain one of these special characters: !@#$%^&*()";
    }
    this.setState({ passwordValid, errorMessage }, this.validateForm);
  };

  validateConfirmPassword = () => {
    const { confirmPassword, password } = this.state;
    let confirmPasswordValid = true;
    let errorMessage = { ...this.state.errorMessage };

    if (password !== confirmPassword) {
      confirmPasswordValid = false;
      errorMessage.confirmPassword = "Passwords do not match";
    }

    this.setState({ confirmPasswordValid, errorMessage }, this.validateForm);
  };

  validateForm = () => {
    const {
      displayNameValid,
      emailValid,
      passwordValid,
      confirmPasswordValid
    } = this.state;
    this.setState({
      formValid:
        displayNameValid && emailValid && passwordValid && confirmPasswordValid
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { email, displayName, password } = this.state;
    signUpStart({ displayName, email, password });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.validateField(name));
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errorMessage
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="mb-10 mt-10">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit} noValidate>
          <FormInput
            type="text"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          >
            {!this.state.displayNameValid && (
              <Alert type="error" message={errorMessage.displayName} />
            )}
          </FormInput>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          >
            {!this.state.emailValid && (
              <Alert type="error" message={errorMessage.email} />
            )}
          </FormInput>
          <FormInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          >
            {!this.state.passwordValid && (
              <Alert type="error" message={errorMessage.password} />
            )}
          </FormInput>
          <FormInput
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          >
            {!this.state.confirmPasswordValid && (
              <Alert type="error" message={errorMessage.confirmPassword} />
            )}
          </FormInput>
          <CustomButton disabled={!this.state.formValid} type="submit">
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
