import React from "react";

class SearchBar extends React.Component {
  //requires state -> use class

  //when input is changed, this cbck func is called
  //[on/handle <Name-of-element> <Event>]
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault(); //prevent the browser from auto submitting the form.
    console.log(this.state.term); //this -> instance of SearchBar; use () =>

    this.props.onUserSubmit(this.state.term); //ref to function in App.js, evoke and pass term
  };

  render() {
    //no () for cbck func for event handler;onChange
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
