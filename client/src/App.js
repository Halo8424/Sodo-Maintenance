import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tickets from "./pages/Tickets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Tickets} />
          <Route exact path="/books" component={Tickets} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; 