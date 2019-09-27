import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     //2 posible callback value (success), (error)
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div>Lattitude: </div>;
// };

//refactor to class
class App extends React.Component {
  // constructor(props) {
  //   super(props); // ref to parent constructor (React.Component)
  //
  //   //only time to do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: "" }; //initialise state obj with props
  // }

  state = { lat: null, errorMessage: "" }; //refactor equivalent to constructor(); auto transposed by Babel

  componentDidMount() {
    console.log("component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      //2 posible callback value (success), (error)

      position => {
        this.setState({ lat: position.coords.latitude }); //update state obj
        console.log(position);
        //this.state.lat = position.coords.latitude; //do not do this!
      },
      err => {
        this.setState({ errorMessage: err.message });
        console.log(err);
      }
    );
  }

  componentDidUpdate() {
    console.log("component was updated; re-rendered to the screen");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
