import React, { Component } from "react";
import Pobrane, { searchElement } from "../services/peopleSession";
export default class PersonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "test",
      lastName: "",
      email: "",
      mobile: "",
      picture: "",
      id: 0,
      position: "",
      gender: ""
    };
  }
  setPesonData = person => {
    this.setState({
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      mobile: person.mobile,
      picture: person.picture,
      id: person.id,
      position: person.position,
      gender: person.gender
    });
  };
  componentDidMount() {
    let tabliczka = Pobrane();
    let person = searchElement(tabliczka, this.props.match.params.id);
    this.setState({
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      mobile: person.mobile,
      picture: person.picture,
      id: person.id,
      position: person.position,
      gender: person.gender
    });
  }
  updateRate = person => {
    this.setState({ firstName: person.firstName });
  };
  render() {
    return (
      <div className="card">
        <div className="card-div-picture">
          <img src={this.state.picture} alt={"picture_of_"+this.state.firstName} className="card-img"/>
        </div>
        <div>
          <span>Position </span>
          <strong className="upper-case">{this.state.position}</strong>
        </div>
        <div>
          <span>Name </span>
          <strong className="upper-case">{this.state.firstName}</strong>
        </div>
        <div>
          <span>Surname </span>
          <strong className="upper-case">{this.state.lastName}</strong>
        </div>
        <div>
          <span>Gender</span> <strong className="upper-case">{this.state.gender}</strong>
        </div>
        <div>
          <span>ID </span>
          <strong>{this.state.id}</strong>
        </div>
        <div>
          <span>Phone </span>
          <strong>{this.state.mobile}</strong>
        </div>
        <div>
          <span> Email: </span>
          <strong>{this.state.email}</strong>
        </div>
      </div>
    );
  }
}
