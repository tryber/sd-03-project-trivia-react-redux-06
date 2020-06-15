import React from 'react';
import logo from '../../show-do-milhão.png';
import LoginContainer from './LoginContainer';
import './LoginPage.style.css';


const TriviaLogo = () => (
  <div className="login-page">
    <header className="login-page-header">
      <img src={logo} alt="logo" />
      <div>
        <LoginContainer />
      </div>
    </header>
  </div>
);

export default TriviaLogo;
