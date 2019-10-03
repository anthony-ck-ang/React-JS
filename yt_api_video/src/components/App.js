import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    //initial default search term
    this.onSearchTermSubmit("buildings");
  }

  onSearchTermSubmit = async search_term => {
    const response = await youtube.get("/search", {
      params: {
        q: search_term
      }
    });

    //update both the list of video (VideoList) and the video (VideoDetail)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] //add a default video; first in the list
    });
  };

  //new callback method -> pass as prop to VideoList component
  OnVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmitLinker={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className=" ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.OnVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
