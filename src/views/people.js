import React, { Component } from "react";
import { allGetFunction } from "../services/allPeople";
import LoadingItem from "../components/loadingItem";
import PersonCard from "../components/personCard";
sessionStorage.setItem("occupation", "software egineer");
const KEY = "appData";
sessionStorage.setItem(KEY, "");
var dane = sessionStorage.getItem(KEY);
export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = { allPeople: [] };
  }
  componentDidMount() {
    if (sessionStorage.getItem(KEY).length > 0) {
      this.setState({ allPeople: JSON.parse(sessionStorage.getItem(KEY)) });
      console.error("Current session, fetch done and save to session storage");
      return;
    } else {
      console.error("First load of data from server, session storage is empty");
      if (this.state.allPeople.length === 0) {
        allGetFunction()
          .then(person => {
            this.setState({ allPeople: person });
          })
          .then(() => {
          
            dane = JSON.stringify(this.state.allPeople);
            sessionStorage.setItem(KEY, JSON.stringify(this.state.allPeople));
            
          })
          .catch(error=>{
            alert("Server error: "+error);
          });
      }
    }
  }
  render() {
 
    if (this.state.allPeople.length === 0) {
    
      return (
        <div>
          <LoadingItem />
       
        </div>
      );
    }

    const peopleComponets = this.state.allPeople.map(person => {
     
      return (
        <PersonCard
          name={person.firstName}
          surname={person.lastName}
          job={person.position}
          imgsrc={person.picture}
          id={person.id}
          key={person.id }
        />
      );
    });
    return <div className="people-container">{peopleComponets}</div>;
  }
}
