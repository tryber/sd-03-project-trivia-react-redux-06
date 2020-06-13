import React from 'react';
import logo from '../../show-do-milhão.png';
import LoginContainer from './LoginContainer';
import './LoginPage.style.css';


const TriviaLogo = () => {
  return (
    <div className="login-page">
      <header className="login-page-header">
        <img src={logo} alt="logo" />
        <p>
          <LoginContainer />
        </p>
      </header>
    </div>
  );
};

export default TriviaLogo;
