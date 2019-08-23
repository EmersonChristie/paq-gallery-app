import React, { Component } from "react";
import ReactResizeDetector from "react-resize-detector";
import StackGrid, { transitions, easings } from "react-stack-grid";
import ArtCldService from "../../services/ArtCldService/ArtCldService";

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
      <figure key={art.Images[0].MediumUrl} className="image">
        <img
          style={{ maxWidth: 300 }}
          src={art.Images[0].MediumUrl}
          alt={art.Title}
          onClick={() => this.removeItem(art.ArtId)}
        />
        {/* <figcaption>{art.Title}</figcaption> */}
      </figure>
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
        gutterHeight={-15}
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

// {
//     "columnWidth": 75,
//     "monitorImagesLoaded": true,
//     "style": {},
//     "gridRef": null,
//     "component": "div",
//     "itemComponent": "img",
//     "gutterWidth": 5,
//     "gutterHeight": 5,
//     "duration": 480,
//     "easing": "cubic-bezier(0.165, 0.84, 0.44, 1)",
//     "appearDelay": 30,
//     "appear": "[function appear]",
//     "appeared": "[function appeared]",
//     "enter": "[function appeared]",
//     "entered": "[function appeared]",
//     "leaved": "[function appear]",
//     "units": {
//       "length": "px",
//       "angle": "deg"
//     },
//     "vendorPrefix": true,
//     "userAgent": null,
//     "enableSSR": false,
//     "onLayout": null,
//     "horizontal": false,
//     "rtl": false
//   }
