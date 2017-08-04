import React, { Component } from 'react';

import logo from './movie-night.jpeg';
import './MainLayout.css';

class MainLayout extends Component {

  render() {
    return (
      <div className="MainLayout">
        <div className="MainLayout__header">
          <img src={logo} className="MainLayout__logo" alt="logo" />
          <h2>Movie List</h2>
        </div>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;
