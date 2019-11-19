import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Contact.scss";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: ""
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "name":
        errors.name = value.length < 1 ? "Name field cannot be empty" : "";
        break;
      case "email":
        errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please, provide a valid email";
        break;
      case "message":
        errors.message =
          value.length < 1 ? "Message field cannot be empty" : "";
        break;
      default:
        break;
    }
    this.setState({
      errors,
      [e.target.name]: e.target.value
    });
  };

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      val => val.length > 0 && (valid = false)
    );
    return valid;
  };

  handleSubmit = e => {};
  render() {
    const { email, name, message, errors } = this.state;
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
            <form onSubmit={this.handleSubmit} noValidate>
              <FormInput
                name="name"
                handleChange={this.handleChange}
                value={name}
                type="text"
                label="Name"
                required
              >
                {errors.name.length > 0 && (
                  <span className="error">{errors.name}</span>
                )}
              </FormInput>
              <FormInput
                name="email"
                type="email"
                handleChange={this.handleChange}
                value={email}
                label="Email"
                required
              >
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </FormInput>
              <FormInput
                name="message"
                isTextarea
                handleChange={this.handleChange}
                value={message}
                label="Message"
                required
                rows="10"
              >
                {errors.message.length > 0 && (
                  <span className="error">{errors.message}</span>
                )}
              </FormInput>
              <div className="buttons">
                <CustomButton type="submit">Send Message</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
