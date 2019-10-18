import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ProteinsPage from "./pages/ProteinsPage/ProteinsPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/proteins" component={ProteinsPage} />
      </Switch>
    </>
  );
}

export default App;
