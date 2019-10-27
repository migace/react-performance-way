import React from 'react';
import { Game } from 'views/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            React performance
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              Home
            </a>            
          </div>
        </div>
      </nav>
      <section className="section">
        <div className="container">
          <Game />
        </div>
      </section>
    </div>
  );
}

export default App;
