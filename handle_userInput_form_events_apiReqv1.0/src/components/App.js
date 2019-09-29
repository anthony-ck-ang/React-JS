import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  //term was pass from child; func ultimately to be evoked
  onSearchSubmit = async term => {
    console.log(term);
    //(root url/ get url, {customization, header, meta data}

    // async, await
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID db5626aaf8cff3cc07e758a149030775d432644e8f2fe51909e8a6895361f962"
      }
    });
    console.log(response.data.results);

    // axios
    //   .get("https://api.unsplash.com/search/photos", {
    //     params: { query: term },
    //     headers: {
    //       Authorization:
    //         "Client-ID db5626aaf8cff3cc07e758a149030775d432644e8f2fe51909e8a6895361f962"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data.results);
    //   }); //promise
    console.log(this); //setState not a func error due to 'wrong' this binding
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onUserSubmit={this.onSearchSubmit}
          guesswhtIam="I am the props obj"
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
