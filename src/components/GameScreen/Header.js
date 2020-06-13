import React from 'react';
import './Header.style.css';

const Header = () => (
  <header className="header">
    <div style={{ display: 'flex' }}>
      <img
        className="player-profile-img-header"
        alt="player-profile"
        src="https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3"
        data-testeid="header-profile-picture"
      />
      <p data-testid="header-player-name">
        Jogador:
        <strong>Jafet</strong>
      </p>
    </div>
    <div>
      <p data-testid="header-score">
        Pontos:
        <strong>0</strong>
      </p>
    </div>
  </header>
);

export default Header;
