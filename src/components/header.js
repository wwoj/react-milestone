import React, { Component } from "react";
//import {Link} from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
export default class Header extends Component {
  state = {
    text: ""
  };

  firstInput = React.createRef();

  updateText = () => {
    this.setState({
      text: this.firstInput.current.value
    });
    this.firstInput.current.setAttribute("class", "asda");
  };
  firstInput = React.createRef();
  homeButton = React.createRef();
  peopleButton = React.createRef();
  contactButton = React.createRef();

  componentDidMount() {
    this.homeButton.current.setAttribute("class", "nav-button active");
  }
  switchHome = () => {
    this.homeButton.current.setAttribute("class", "nav-button active");
    this.peopleButton.current.setAttribute("class", "nav-button");
    this.contactButton.current.setAttribute("class", "nav-button");
  };
  switchPeople = () => {
    this.homeButton.current.setAttribute("class", "nav-button");
    this.peopleButton.current.setAttribute("class", "nav-button  active");
    this.contactButton.current.setAttribute("class", "nav-button");
  };
  switchContact = () => {
    this.homeButton.current.setAttribute("class", "nav-button");
    this.peopleButton.current.setAttribute("class", "nav-button");
    this.contactButton.current.setAttribute("class", "nav-button  active");
  };

  render() {
    return (
      <div className="header-class">
        <nav>
          <NavLink exact={true} activeClassName="is-active" to="/">
            <button className="nav-button" ref={this.homeButton}>
              Home
            </button>
          </NavLink>
          <NavLink exact={true} activeClassName="is-active" to="/people">
            <button className="nav-button" ref={this.peopleButton}>
              People
            </button>
          </NavLink>
          <NavLink exact={true} activeClassName="is-active" to="/contact">
            <button className="nav-button" ref={this.contactButton}>
              Contact
            </button>
          </NavLink>
        </nav>
      </div>
    );
  }
}
