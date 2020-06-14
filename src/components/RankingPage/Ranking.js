import React from 'react';
import { Link } from 'react-router-dom';


class Ranking extends React.Component {
  static rankingList() {
    const testPlayer = JSON.parse(localStorage.getItem('ranking')) || [];
    const sortedPlayer = testPlayer.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });

    return (
      <ul>
        {sortedPlayer.map(({ name, score }, indice) => {
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

  static homeButton() {
    return (
      <div>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Voltar ao Inicio</button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Ranking</h1>
        {Ranking.rankingList()}
        {Ranking.homeButton()}
      </div>
    );
  }
}

export default Ranking;
