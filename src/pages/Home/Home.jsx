import React, { Component } from "react";
import Gallery from "../../components/Gallery/Gallery.jsx";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: []
    };
  }

  componentDidMount() {
    console.log("Home Page Mounted");
  }

  render() {
    return <Gallery />;
  }
}

export default Home;
