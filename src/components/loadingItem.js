import React, { Component } from "react";

class LoadingItem extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingText: "Loading" };
  }

  addDots = () => {
    let currentText = this.state.loadingText;

    this.setState({ loadingText: currentText + "." });
  };
  componentDidMount() {
    let loadingtxt = "Loading";
    let dotsText = "";
    setInterval(() => {
      if (dotsText.length >= 4) {
        dotsText = "";
      }
      dotsText += ".";

      this.setState({ loadingText: loadingtxt + dotsText });
    }, 1000);
  }
  render() {
    return (
      <section>
        <div className="loading-container">
        <div className="loading-div">
          <img
            src="https://i.pinimg.com/originals/07/af/8e/07af8ef54fb45d2b6f00eaa50f2fe5e8.gif"
            alt="Loading gif"
            className="loading-img"
          />
          
          <h1 className="loading-positioning">{this.state.loadingText}</h1>
        </div>
        
      </div>
      </section>
    );
  }
}

export default LoadingItem;
