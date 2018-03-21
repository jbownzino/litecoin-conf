import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LandingContent extends React.Component {
    render() {
        return (
            <div className="content">
                <h1>Global Payments Conference</h1>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="flex">
          <div className="overlay" />
        <LandingContent />
      </div>
    );
  }
}

export default App;
