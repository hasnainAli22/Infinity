import React from "react";
import Home from "./component/Home";
import Service from "./component/Service";
import Contact from "./component/Contact";
import About from "./component/About";
import Navbar from "./component/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
