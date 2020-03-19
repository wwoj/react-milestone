import React, { Component } from "react";
import Input from "../components/input";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      web: "",
      text: ""
    };
  }
  stopdefault(event) {
    event.preventDefault();
    console.log("Zatrzymany default");
  }
  updateName = event => {
    this.setState({ name: event.target.value });
    console.log(this.state.name)
  };
  updateEmail = event => {
    this.setState({ email: event.target.value });
  };
  updatePhone = event => {
    this.setState({ phone: event.target.value });
  };
  updateWeb = event => {
    this.setState({ web: event.target.value });
  };
  updateText = event => {
    this.setState({ text: event.target.value });
  };

  submitClick = ()=>{
    let contactObj = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      web: this.state.web,
      text: this.state.text
    };
 
    console.log(contactObj);
  }
  render() {
    return (
      <div>
        <form className="form-class" onSubmit={this.stopdefault}>
          <h3>Contact Info</h3>
          <section className="inputs-area">
          <Input
            type="text"
            placeholder="put your name"
            name="name"
            className="input-field"
            onChange={this.updateName}
          />
          <Input
            type="text"
            placeholder="put your email"
            name="email"
            className="input-field"
            onChange={this.updateEmail}
          />
          <Input
            type="text"
            placeholder="put your phone"
            name="phone"
            className="input-field"
            onChange={this.updatePhone}
          />
          <Input
            type="text"
            placeholder="put your web site"
            name="web"
            className="input-field"
            onChange={this.updateWeb}
          />
          <textarea
            placeholder="Awesome page"
            name="text-info"
            className="input-field"
            onChange={this.updateText}
            title="Hooray!"
          />
          <button type="button"className="button-submit" onClick={this.submitClick}>
            Submit
          </button>
          </section>
        </form>
      </div>
    );
  }
}
