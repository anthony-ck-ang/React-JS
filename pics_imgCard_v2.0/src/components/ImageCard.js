import React from "react";

//each image
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef(); // ref a DOM element eg: img
  }

  componentDidMount() {
    //cbck on img load -> call method
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //bind 'this' with arrow func for cbck else error
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };

  render() {
    //deconstruct
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
