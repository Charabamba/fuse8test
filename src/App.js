import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Home from "./components/containers/Home";
import HousePage from "./components/containers/HousePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={HousePage} />

            <Route
              render={() => {
                return <h1>Page not found :(</h1>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
