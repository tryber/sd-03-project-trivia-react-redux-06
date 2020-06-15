import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  static rankingList() {
    const gravatarPlayer = (picture) => (
      <img src={picture} alt="Gravatar" />
    );

    const getUser = JSON.parse(localStorage.getItem('ranking')) || [];
    const sortedUsers = getUser.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });

    return (
      <ul>
        {sortedUsers.map(({ name, score, picture }, indice) => {
          const index = indice + 1;
          return (
            <li>
              {gravatarPlayer(picture)}
              <span data-testid={`player-name-${index}`}>
                {`${name}`}
              </span>
              <span data-testid={`player-score-${index}`}>
                {` ${score}`}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {Ranking.rankingList()}
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Voltar ao Inicio</button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
