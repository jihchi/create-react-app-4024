import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const crash = () => {
  const d = [[[null]]];

  return d.reduce((acc, items) => {
    const next = items.map(item => {
      const next2 = item.map(v => {
        const next3 = v.map(vv => {
          const next4 = vv + 1;

          return next4;
        });
        return next3;
      });

      return next2;
    });

    return acc.concat(next);
  }, []);
};

class App extends Component {
  render() {
    return (
      <div className="App" onClick={crash}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Click here to crash this app!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
