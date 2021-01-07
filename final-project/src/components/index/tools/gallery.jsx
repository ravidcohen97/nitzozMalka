import React, { Component } from "react";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

class Gallery extends Component {
  state = { isOpen: false, image: "" };

  componentDidMount() {
    const { image } = this.props;
    this.setState({ image: image });
  }
  render() {
    const { isOpen, image } = this.state;
    return (
      <div>
        <img
          src={image}
          onClick={() => this.setState({ isOpen: true })}
          alt={image}
          style={{
            width: "350px",
            margin: "10px",
            height: "250px",
            border: "#96090e 3px solid ",
            borderRadius: "25px",
          }}
        />

        {isOpen && (
          <Lightbox
            mainSrc={image}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

export default Gallery;
