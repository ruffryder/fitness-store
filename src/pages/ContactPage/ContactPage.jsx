import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Contact.scss";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {};
  render() {
    const { email, name, message } = this.state;
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
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="name"
                handleChange={this.handleChange}
                value={name}
                type="text"
                label="Name"
                required
              />
              <FormInput
                name="email"
                type="email"
                handleChange={this.handleChange}
                value={email}
                label="Email"
                required
              />
              <FormInput
                name="message"
                isTextarea
                handleChange={this.handleChange}
                value={message}
                label="Message"
                required
                rows="10"
              />
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
