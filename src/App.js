import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./store";
import Counts from "./Counts"
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/" render={props => <Counts />} />
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
});

//actions que utilizo en este componente
export default connect(mapStateToProps, { })(App);

