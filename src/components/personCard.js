import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default class PersonCard extends Component {
  render() {
    return (
        <Link to={"/person/"+this.props.id} params={{ id: this.props.id }}>
      <div className="person-card" >
        <img
          src={this.props.imgsrc}
          alt="personPicture"
          className="person-picture"
        />
        <div className="person-details">
          <p>
            <strong className="upper-case">{this.props.name} {this.props.surname}</strong>
          </p>
          <p>
            <strong>{this.props.job}</strong>
          </p>
        </div>
      </div>
      </Link>
    );
  }
}
