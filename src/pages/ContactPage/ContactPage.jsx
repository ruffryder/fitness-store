import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import Alert from "../../components/Alert/Alert";
import "./Contact.scss";

class ContactPage extends Component {
  state = {
    name: "",
    nameValid: true,
    email: "",
    emailValid: true,
    message: "",
    messageValid: true,
    formValid: false,
    errorMessage: {},
    showSubmitMessage: false
  };

  validateName = () => {
    const { name } = this.state;
    let nameValid = true;
    let errorMessage = { ...this.state.errorMessage };
    if (name.length < 3) {
      nameValid = false;
      errorMessage.name = "Name must be at least 3 characters";
    }

    this.setState({ nameValid, errorMessage }, this.validateForm);
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

  validateMessage = () => {
    const { message } = this.state;
    let messageValid = true;
    let errorMessage = { ...this.state.errorMessage };
    if (message.length < 1) {
      messageValid = false;
      errorMessage.message = "Message field cannot be empty";
    }
    this.setState({ messageValid, errorMessage }, this.validateForm);
  };

  validateField = name => {
    switch (name) {
      case "name":
        this.validateName();
        break;
      case "email":
        this.validateEmail();
        break;
      case "message":
        this.validateMessage();
        break;
      default:
        return;
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => this.validateField(name)
    );
  };

  validateForm = () => {
    const { nameValid, emailValid, messageValid } = this.state;
    this.setState({ formValid: nameValid && emailValid && messageValid });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: "",
      showSubmitMessage: true
    });
  };

  handleClose = () => {
    this.setState({
      showSubmitMessage: false
    });
  };
  render() {
    const { email, name, message, errorMessage } = this.state;
    return (
      <div className="container">
        <h1>Contact</h1>
        <hr />
        <div className="flex-container">
          <div className="map-container">
            <div style={{ width: "100%" }}>
              <iframe
                title="rfc map"
                width="100%"
                height="600"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=43.0263036,25.1040867&amp;q=Sevlievo%2C%20Bulgaria+(Royal%20Fitness%20Supplements)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </div>
          <div className="form-container">
            {this.state.showSubmitMessage && (
              <Alert
                closable
                type="success"
                message="Your message has been sent successfully!"
                handleClose={this.handleClose}
              />
            )}
            <form onSubmit={this.handleSubmit} noValidate>
              <FormInput
                name="name"
                id="name"
                handleChange={this.handleChange}
                value={name}
                type="text"
                label="Name"
                required
              >
                {!this.state.nameValid && (
                  <Alert type="error" message={errorMessage.name} />
                )}
              </FormInput>
              <FormInput
                name="email"
                id="email"
                type="email"
                handleChange={this.handleChange}
                value={email}
                label="Email"
                required
              >
                {!this.state.emailValid && (
                  <Alert type="error" message={errorMessage.email} />
                )}
              </FormInput>
              <FormInput
                name="message"
                id="message"
                isTextarea
                handleChange={this.handleChange}
                value={message}
                label="Message"
                required
                rows="10"
              >
                {!this.state.messageValid && (
                  <Alert type="error" message={errorMessage.email} />
                )}
              </FormInput>
              <div className="buttons">
                <CustomButton disabled={!this.state.formValid} type="submit">
                  Send Message
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
