import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/pageLogin';

import logo from './trivia.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SUA VEZ
        </p>
      </header>
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
