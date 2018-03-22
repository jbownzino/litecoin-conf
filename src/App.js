import React, { Component } from 'react';
import logo from './assets/images/litecoin-logo.png';
import pd from './assets/images/pedestal.png';
import './App.css';

class LandingContent extends React.Component {
    render() {
        return (
            <div className="content">
                <img className="logo drop-shadow" src={logo} alt="Logo" />
                <div className="details jump">
                    <img className="pd drop-shadow" src={pd} alt="Pedestal" />
                    <h1>Litecoin Global Payments Conference</h1>
                    <h2>Presented by the Litecoin Foundation</h2>
                    <h3>South San Francisco Conference Center | September 14-15 2018</h3>
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
