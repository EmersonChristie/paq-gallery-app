import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paintings: []
    };
  }

  componentDidMount() {
    console.log("Home Page Mounted");
  }
  render() {
    return (
      <div>
        <h2>Here's a list of paintings...</h2>
      </div>
    );
  }
}

export default Home;
