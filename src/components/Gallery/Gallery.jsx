import React, { Component } from "react";

import StackGrid from "react-stack-grid";
import ArtCldService from "../../services/ArtCldService/ArtCldService";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: []
    };
    this.artCldService = new ArtCldService();
  }

  componentDidMount() {
    console.log("Gallery Mounted");
    this.artCldService.getAllArt().then(res => {
      this.setState({ artwork: res.Artwork });
      console.log(this.state);
    });
  }

  renderPaintings = () => {
    return this.state.artwork.map((art, key) => {
      return (
        <div key={key}>
          <img src={art.Images[0].MediumUrl} alt={art.Title} />
          {/* <p>{art.Title}</p> */}
        </div>
      );
    });
  };

  render() {
    return (
      <StackGrid columnWidth={75} monitorImagesLoaded={true}>
        <div>{this.renderPaintings()}</div>
      </StackGrid>
    );
  }
}

export default Gallery;
