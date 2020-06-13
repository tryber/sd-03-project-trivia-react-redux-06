import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Feedback from './components/FeedbackPage/feedback';
import Settings from './components/SettingsPage/Settings';
import './App.css';
import GameScreen from './components/GameScreen/GameScreen';

export default function App() {
  return (
    <div>
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/game-screen" component={GameScreen} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/" component={Settings} />
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
