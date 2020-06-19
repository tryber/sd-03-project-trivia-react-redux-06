import React from 'react';
import { Link } from 'react-router-dom';
import './Ranking.style.css';

class Ranking extends React.Component {
  static rankingList() {
    const gravatarPlayer = (picture) => <img src={picture} alt="Gravatar" />;

    const getUser = JSON.parse(localStorage.getItem('ranking')) || [];
    const sortedUsers = getUser.sort((a, b) => b.score - a.score);

    return (
      <ul className="full-list">
        {sortedUsers.map(({ name, score, picture }, indice) => {
          const index = indice + 1;
          return (
            <li className="list-items" key={Math.random() * Math.PI}>
              {gravatarPlayer(picture)}
              <p data-testid={`player-name-${index}`}>{`${name}`}</p>
              <p data-testid={`player-score-${index}`}>{` ${score}`}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="title" data-testid="ranking-title">Ranking</h1>
          {Ranking.rankingList()}
        </div>
        <div className="home-btn-container">
          <Link to="/">
            <button className="home-btn" type="button" data-testid="btn-go-home">
              Voltar ao Inicio
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Ranking;
