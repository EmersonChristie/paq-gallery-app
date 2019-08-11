import React, { Component } from "react";
import ArtCldService from "../../services/ArtCldService/ArtCldService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: []
    };
    this.artCldService = new ArtCldService();
  }

  componentDidMount() {
    console.log("Home Page Mounted");
    this.artCldService.getAllArt().then(res => {
      this.setState({ artwork: res.Artwork });
      console.log(this.state);
    });
  }

  renderPaintings = () => {
    return this.state.artwork.map((art, key) => {
      return (
        <li key={key}>
          <p>{art.Title}</p>
          <p>{key}</p>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Here's a list of paintings...</h2>
        <ul>{this.renderPaintings()}</ul>
      </div>
    );
  }
}

export default Home;
