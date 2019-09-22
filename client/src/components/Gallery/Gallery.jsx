import React, { Component } from "react";
import ReactResizeDetector from "react-resize-detector";
import StackGrid, { transitions, easings } from "react-stack-grid";
import ArtCldService from "../../services/ArtCldService/ArtCldService";

import locStore from "local-storage";

import getSchemaFromData from "graphql-schema-from-json";
import { printSchema } from "graphql";

const transition = transitions.scaleDown;

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
    });
  }

  removeItem = id => {
    this.setState({
      artwork: this.state.artwork.filter(art => art.ArtId !== id)
    });
  };

  renderPaintings = () => {
    return this.state.artwork.map(art => (
      <div style={{ width: 300 }}>
        <img
          style={{ width: 300 }}
          src={art.Images[0].MediumUrl}
          alt={art.Title}
          onClick={() => this.removeItem(art.ArtId)}
        />
      </div>
    ));
  };

  render() {
    return (
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={300}
        duration={600}
        gutterWidth={15}
        // TODO: fix gutter height (must be negative)
        gutterHeight={15}
        gridRef={grid => (this.grid = grid)}
        easing={easings.cubicOut}
        appearDelay={60}
        appear={transition.appear}
        appeared={transition.appeared}
        enter={transition.enter}
        entered={transition.entered}
        leaved={transition.leaved}
      >
        {this.renderPaintings()}
      </StackGrid>
    );
  }
}

export default Gallery;
