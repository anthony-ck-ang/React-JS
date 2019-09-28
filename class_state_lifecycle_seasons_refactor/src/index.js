import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

//refactor to class
class App extends React.Component {
  state = { lat: null, errorMessage: "" }; //refactor equivalent to constructor(); auto transposed by Babel

  componentDidMount() {
    console.log("component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("component was updated; re-rendered to the screen");
  }

  //put conditional logic in helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }

  render() {
    //keep to 1 return statement in render()
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
