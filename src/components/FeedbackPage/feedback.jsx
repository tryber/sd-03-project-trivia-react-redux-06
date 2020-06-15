import React from 'react';
import { Link } from 'react-router-dom';
import './feedback.style.css';
// import { connect } from 'react-redux';

const playerName = JSON.parse(localStorage.getItem('state')).player.name;
const playerScore = JSON.parse(localStorage.getItem('state')).player.score;
const playerAnswers = JSON.parse(localStorage.getItem('state')).player.assertions;
const ranking = JSON.parse(localStorage.getItem('ranking'));
const state = JSON.parse(localStorage.getItem('state'));

const playerGravatar = ranking.find((player) => player.name === playerName).picture;

console.log(playerGravatar);

console.log(ranking, state);

const renderButtons = () => (
  <div>
    <div>
      <Link to="/ranking">
        <button
          type="button"
          className="feedback-button-ranking"
          data-testid="btn-ranking"
        >
          VER RANKING
        </button>
      </Link>
    </div>
    <div>
      <Link to="/">
        <button
          type="button"
          className="feedback-button-playagain"
          data-testid="btn-play-again"
        >
          JOGAR NOVAMENTE
        </button>
      </Link>
    </div>
  </div>
);

const feedbackPos = () => (
  <div>
    <h1 data-testid="feedback-text">Mandou bem!</h1>
  </div>
);

const feedbackNeg = () => (
  <div>
    <h1 data-testid="feedback-text">Podia ser melhor...</h1>
  </div>
);

const renderScore = () => (
  <div>
    <h2 data-testid="feedback-total-score">{`Você acertou ${playerAnswers} questão!`}</h2>
    <h2 data-testid="feedback-total-question">{`Um total de ${playerScore} pontos!`}</h2>
  </div>
);

const renderFeedbackScreen = () => (
  <div>
    {playerAnswers < 3 ? feedbackNeg() : feedbackPos()}
    {renderScore()}
  </div>
);

const Feedback = () => (
  <div className="header-container">
    <header className="feedback-header">
      <div style={{ display: 'flex' }}>
        <img
          className="player-profile-img-header"
          alt="player-profile"
          src={playerGravatar}
          data-testeid="header-profile-picture"
        />
        <p data-testid="header-player-name">
          Jogador:
          <strong>{playerName}</strong>
        </p>
      </div>
      <div>
        <p data-testid="header-score">
          Pontos:
          <strong>{playerScore}</strong>
        </p>
      </div>
    </header>
    <div className="score-container">
      {renderFeedbackScreen()}
      {renderButtons()}
    </div>
  </div>
);

export default Feedback;
