import React, { Component } from "react";
import Quotation from "../components/quotation";
import { quotationArray } from "../components/quotation";
import Poster from '../components/poster';

export default class Home extends Component {
  
  componentWillMount() {
    
    this.indexArray = getLocacStorage();
    this.indexArray = rundArrayIndex(this.indexArray, quotationArray.length - 1);
  }
  componentWillUpdate() {
    this.indexArray = rundArrayIndex(this.indexArray, quotationArray.length - 1);
  }
  render() {
    return (
      <div className="home-class">
        <Quotation index={this.indexArray} />
        <Poster />
      </div>
    );
  }
}

function rundArrayIndex(oldValue,maxValue) {
  
  let randomNumber
  do {
    randomNumber = Math.floor(Math.random() * maxValue);
  } 
  while (oldValue == randomNumber);
  setLocacStorage(randomNumber);
  return randomNumber;
}


function getLocacStorage()
{
    let localObj = localStorage.getItem("lastQuotationIndex");
    let parseLocal = JSON.parse(localObj);
    if(parseLocal ==null)
    {
        return 999;
    }
    else
    {
        return parseLocal;
    }

}
function setLocacStorage(value)
{
    localStorage.setItem("lastQuotationIndex",JSON.stringify(value));
}
