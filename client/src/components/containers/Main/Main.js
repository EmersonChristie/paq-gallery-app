import React from "react";
import { Switch, Route } from "react-router-dom";
import home from "../../../pages/home/home";
import favorites from "../../../pages/favorites/favorites";


function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/user/:id" component={favorites} />
      </Switch>
    </main>
  );
}

export default Main;
