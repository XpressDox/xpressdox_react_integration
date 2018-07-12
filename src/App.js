import React, { Component } from 'react';
import xdlogo from './xpressdox-main-logo.png';
import LessThanThreeLogo from './less-than-3.png';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import SimpleTemplate from './SimpleTemplate/SimpleTemplate';

class App extends Component {
  render() {
    return (
      <div className={"App center-text"}>
        <header className="App-header">
          <img src={xdlogo} className="xd-App-logo" alt="xd logo" />
          <img src={LessThanThreeLogo} className="xd-App-logo" alt="< 3 logo" />          
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>

        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/SimpleTemplate" component={SimpleTemplate} />
          </div>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;