import React, { Component } from "react";
import styles from './home.module.css'
import Gallery from "../../components/containers/Gallery/Gallery";


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
     return (
        <div className={styles.container}>
          <Gallery />
        </div>
     );
    
  }
}

export default Home;
