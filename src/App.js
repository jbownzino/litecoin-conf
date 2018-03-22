import React, { Component } from 'react';
import logo from './assets/images/litecoin-logo.png';
import text from './assets/images/litecoin-text.png';
import accepted from './assets/images/litecoin-accepted.png';
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
                <div className="social">
                    <img className="accepted" src={accepted} alt="Litecoin Accepted Here"/>
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/LitecoinFoundation"><i class="ti-facebook" /></a></li>
                        <li><a target="_blank" href="https://twitter.com/LTCFoundation"><i class="ti-twitter-alt" /></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/ltcfoundation/"><i class="ti-instagram" /></a></li>
                        <li><a href="mailto:info@litecoin-foundation.org"><i class="ti-email" /></a></li>
                    </ul>
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
