import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
// eslint-disable-next-line import/no-named-as-default
import Feedback from './components/FeedbackPage/feedback';
import Settings from './components/SettingsPage/Settings';
import Ranking from './components/RankingPage/Ranking';
// import './App.css';
import GameScreen from './components/GameScreen/GameScreen';
// import './App.style.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/game-screen" component={GameScreen} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Ranking" component={Ranking} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
