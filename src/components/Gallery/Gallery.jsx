import React, { Component } from "react";
import ReactResizeDetector from "react-resize-detector";
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

  removeItem = id => {
    this.setState({
      artwork: this.state.artwork.filter(art => art.ArtId !== id)
    });
  };

  // renderPaintings = () => {
  //   return this.state.artwork.map((art, key) => {
  //     return (
  //       <div key={key} onClick={this.removeItem(art.ArtId)}>
  //         {/* <img src={art.Images[0].MediumUrl} alt={art.Title} /> */}
  //         <img src={art.Images[0].MediumUrl} alt={art.Title} />
  //         {/* <p>{art.Title}</p> */}
  //       </div>
  //     );
  //   });
  // };

  renderPaintings = () => {
    return this.state.artwork.map(art => (
      //   <div key={art.ArtId} onClick={() => this.removeItem(art.ArtId)}>
      <img
        style={{ maxWidth: 300 }}
        src={art.Images[0].SmallUrl}
        alt={art.Title}
        onClick={() => this.removeItem(art.ArtId)}
      />
      //   </div>
    ));
  };

  render() {
    return (
      <StackGrid
        monitorImagesLoaded={true}
        columnWidth={300}
        duration={600}
        gutterWidth={15}
        gutterHeight={15}
        gridRef={grid => (this.grid = grid)}
        // easing={easings.cubicOut}
        // appearDelay={60}
        // appear={transition.appear}
        // appeared={transition.appeared}
        // enter={transition.enter}
        // entered={transition.entered}
        // leaved={transition.leaved}
      >
        {/* <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={() => {
            if (this.grid) {
              this.grid.updateLayout();
            }
          }}
        > */}
        <div>{this.renderPaintings()}</div>
        {/* </ReactResizeDetector> */}
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
