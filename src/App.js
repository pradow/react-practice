import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddForm from "./AddForm";
import VideoList from "./VideoList";
import Nav from "./Nav";
import About from "./About";
import Error from "./Error";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <>
            <AddForm />
            <VideoList />
          </>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
