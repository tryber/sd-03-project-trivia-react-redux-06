import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Feedback from './components/FeedbackPage/feedback';
import GameScreen from './components/GameScreen/GameScreen';
import './App.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/game-screen" component={GameScreen} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
