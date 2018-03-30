import React, { Component } from 'react';
import logo from './assets/images/litecoin-logo.png';
import text from './assets/images/litecoin-text.png';
import accepted from './assets/images/litecoin-accepted.png';
import './App.css';

class LandingContent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="image-wrap">
                    <img className="logo jump drop-shadow" src={logo} alt="Logo" />
                    <br/>
                    <img className="text" src={text} alt="Logo" />
                </div>
                <div className="details">
                    <h1>Global Litecoin Summit</h1>
                    <div className="subtitle">
                        <h3>South San Francisco Conference Center</h3>
                    </div>
                    <div className="date">
                        <h2>September 14-15, 2018</h2>
                    </div>
                </div>
                <div className="social">
                    <img className="accepted" src={accepted} alt="Litecoin Accepted Here"/>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LitecoinFoundation"><i className="ti-facebook" /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/LTCFoundation"><i className="ti-twitter-alt" /></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ltcfoundation/"><i className="ti-instagram" /></a></li>
                        <li><a href="mailto:david.williams@litecoinfoundation.net"><i className="ti-email" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

/*<p class="lead">Vendor/Sponsorship inquiries: david.williams@litecoinfoundation.net</p>*/

/*<ul>
<li>Booths available</li>
<li>$200 for 10x10'</li>
<li>$400 for 10x20'</li>
<li>Limited quantity available</li>
</ul>*/

class App extends Component {
  render() {
    return (
      <div className="content">
        <LandingContent />
      </div>
    );
  }
}

export default App;
