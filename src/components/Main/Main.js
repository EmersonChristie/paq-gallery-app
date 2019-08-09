import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorites/Favorites";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={Favorites} />
      </Switch>
    </main>
  );
}

export default Main;
