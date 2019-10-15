import React, { Component, Fragment } from "react";
// import ReactResizeDetector from "react-resize-detector";

import StackGrid, { transitions, easings } from "react-stack-grid";
import Loading from '../UI/Loading'

import './Gallery.css';

import ArtCldService from "../../services/ArtCldService/ArtCldService";


const transition = transitions.scaleDown;

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
        <img
          src={art.Images[0].MediumUrl}
          alt={art.Title}
        />

    ));
  };

  render() {

    return (

      <div className="row">
          <div className="column">{this.renderPaintings()}</div>
          <div className="column">{this.renderPaintings()}</div>
          <div className="column">{this.renderPaintings()}</div>
          <div className="column">{this.renderPaintings()}</div>
        </div>

    //   <Fragment> {
    //     this.state.loading 
    //       ? <Loading /> 
    //       : <StackGrid
    //         monitorImagesLoaded={true}
    //         columnWidth={300}
    //         duration={600}
    //         gutterWidth={15}
    //         // TODO: fix gutter height (must be negative)
    //         gutterHeight={15}
    //         gridRef={grid => (this.grid = grid)}
    //         easing={easings.cubicOut}
    //         appearDelay={60}
    //         appear={transition.appear}
    //         appeared={transition.appeared}
    //         enter={transition.enter}
    //         entered={transition.entered}
    //         leaved={transition.leaved}
    //       >
    //         {this.renderPaintings()}
    //       </StackGrid>
    //     }
    // </Fragment>
    );
  }
}

export default Gallery;
