import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

export default App;
