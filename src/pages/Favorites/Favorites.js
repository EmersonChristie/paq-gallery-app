import React, { Component } from "react";

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      painting: {}
    };
  }

  componentDidMount() {
    console.log("Favorites Page");
    console.log(this.props.match.params.number);
  }

  render() {
    return (
      <div>
        <h2>Painting:</h2>
      </div>
    );
  }
}

export default FavoritesPage;
