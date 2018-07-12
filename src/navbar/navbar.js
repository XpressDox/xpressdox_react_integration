import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="red darken-4">
          <div className="nav-wrapper">
            {/* <a href="#" className="brand-logo">Logo</a> */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/SimpleTemplate">Simple Template</Link>
              </li>
              <li>
                <Link to="/">Fax Cover Example</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;