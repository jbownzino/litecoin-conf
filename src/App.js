import React, { Component } from 'react';
import logo from './assets/litecoin-logo.png';
import text from './assets/litecoin-text.png';
import './App.css';

class LandingContent extends React.Component {
    render() {
        return (
            <div className="content">
                <img className="logo jump drop-shadow" src={logo} alt="Logo" />
                <div className="details">
                    <img className="text" src={text} alt="Logo" />
                    <h1>Global Payments Conference</h1>
                    <h3>South San Francisco Conference Center | September 14-15, 2018</h3>
                </div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="image-bg">
        <LandingContent />
      </div>
    );
  }
}
/*<img src={pd} alt="Logo" />*/

export default App;
