import React from 'react';
import logo from '../../show-do-milhão.png';
import LoginContainer from './LoginContainer';
import './LoginPage.style.css';


const TriviaLogo = () => (
  <div className="login-page">
    <header className="login-page-header">
      <div>
        <img src={logo} alt="logo" style={{ marginTop: '100px' }} />
        <LoginContainer />
      </div>
    </header>
  </div>
);

export default TriviaLogo;
