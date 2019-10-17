import React, { Component, Fragment } from "react";
// import ReactResizeDetector from "react-resize-detector";
import ArtCard from '../../ui/ArtCard/ArtCard'
import Loading from '../../ui/Loading'
import styles from './Gallery.module.css';
// import './Gallery.css';

import ArtCldService from "../../../services/ArtCldService/ArtCldService";


// const transition = transitions.scaleDown;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: [],
      loading: true
    };
    this.artCldService = new ArtCldService();
  }

  componentDidMount() {
    console.log("Gallery Mounted");
    this.artCldService.getAllArt().then(res => {
      this.setState({ artwork: res.Artwork });
      console.log(this.state)
    }).finally(() => this.setState({ loading: false }));

    console.log(this.state);
  }

  removeItem = id => {
    this.setState({
      artwork: this.state.artwork.filter(art => art.ArtId !== id)
    });
  };

  renderPaintings = () => {
    return this.state.artwork.map(art => (
        <ArtCard className={styles.artCard} url={art.Images[0].MediumUrl} artist={art.Artist.Name} title={art.Title} dimensions={art.Dimensions.Formatted} date={art.Date} />
    ));
  };

  render() {

    return (

      <div className={styles.row}>
          <div className={styles.column}>{this.renderPaintings()}</div>
          <div className={styles.column}>{this.renderPaintings()}</div>
          <div className={styles.column}>{this.renderPaintings()}</div>
          <div className={styles.column}>{this.renderPaintings()}</div>
        </div>
    );
  }
}

export default Gallery;
