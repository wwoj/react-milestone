import React, { Component } from "react";
import getSessionStorage, { searchElement } from "../services/peopleSession";
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
      gender: person.gender,
      hasError: false
    });
  };

  static getDerivedStateFromError(error) {
    // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
    console.log(error, errorInfo);
  }
  componentDidMount() {
    let sessionPeopleStorage = getSessionStorage();
    let person = searchElement(sessionPeopleStorage, this.props.match.params.id);
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

    console.warn("Zaladowalem stronke")
  }
  updateRate = person => {
    this.setState({ firstName: person.firstName });
  };
  render() {
    if (this.state.hasError) {
      // Możesz wyrenderować dowolny interfejs zastępczy.
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="card">
        <div className="card-div-picture">
          <img
            src={this.state.picture}
            alt={"picture_of__" + this.state.firstName}
            className="card-img"
          />
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
          <span>Gender</span>{" "}
          <strong className="upper-case">{this.state.gender}</strong>
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
