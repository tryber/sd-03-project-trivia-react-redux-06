import { Link } from 'react-router-dom';
import React from 'react';

class Ranking extends React.Component {
  static rankingList() {
    const getUser = JSON.parse(localStorage.getItem('ranking')) || [];
    const sortedUsers = getUser.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });

    return (
      <ul>
        {sortedUsers.map(({ name, score }, indice) => {
          const index = indice + 1;
          return (
            <li>
              <span data-testid={`player-name-${index}`}>
                {`${name}`}
              </span>
              <span data-testid={`player-score-${index}`}>
                {`${score}`}
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
        <h1>Ranking</h1>
        {Ranking.rankingList()}
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Voltar ao Inicio</button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
