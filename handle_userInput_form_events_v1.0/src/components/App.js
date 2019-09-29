import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  //term was pass from child; func ultimately to be evoked
  onSearchSubmit(term) {
    console.log(term);
    //logic here to take search term and make api img request
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
