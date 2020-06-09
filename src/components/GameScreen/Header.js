import React from 'react';

const Header = () => {
  return (
    <header>
      <img data-testid="header-profile-picture" src="" alt="profile picture" />
      <span data-testid="header-player-name">Jafet</span>
      <span data-testid="header-score">Placa zerado, vindo do store</span>
    </header>
  )
}

export default Header;