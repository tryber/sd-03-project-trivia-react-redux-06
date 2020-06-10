import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/pageLogin';
import logo from './trivia.png';
import './App.css';
import GameScreen from './components/GameScreen/GameScreen';

export default function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            SUA VEZ
          </p>
        </header>
      </div>
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/game-screen" component={GameScreen} />
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
