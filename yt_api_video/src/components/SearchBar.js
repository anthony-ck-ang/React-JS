import React from "react";

class SearchBar extends React.Component {
  state = { search_term: "" };

  onInputChange = event => {
    this.setState({ search_term: event.target.value });
  };

  onSubmit = event => {
    //TODO: Make sure to call callback from parent component
    event.preventDefault();
    this.props.onFormSubmitLinker(this.state.search_term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.search_term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
