import React from 'react';
import logo from '../../trivia.png';
import LoginContainer from './LoginContainer';

const TriviaLogo = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <LoginContainer />
        </div>
      </header>
    </div>
  );
};

export default TriviaLogo;
