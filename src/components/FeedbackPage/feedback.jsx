import React, { Component } from 'react';
import './feedback.style.css';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

export class Feedback extends Component {
  static feedbackPos() {
    return (
      <div>
        <h1 data-testid="feedback-text">Mandou bem!</h1>
      </div>
    );
  }

  static feedbackNeg() {
    return (
      <div>
        <h1 data-testid="feedback-text">Podia ser melhor...</h1>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      playerScore: 50,
      playerImage:
        'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3',
      playerName: 'Eduardo',
      correctAnswers: 2,
    };
  }

  renderScore() {
    const { correctAnswers, playerScore } = this.state;
    return (
      <div>
        <h2>{`Você acertou ${correctAnswers} questões!`}</h2>
        <h2>{`Um total de ${playerScore} pontos!`}</h2>
      </div>
    );
  }

  renderFeedbackScreen() {
    const { correctAnswers } = this.state;
    return (
      <div>
        {correctAnswers <= 3 ? Feedback.feedbackNeg() : Feedback.feedbackPos()}
        {this.renderScore()}
      </div>
    );
  }

  static renderButtons() {
    return (
      <div>
        <div>
          <Link to="/ranking">
            <button type="button" className="feedback-button-ranking">
              VER RANKING
            </button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <button type="button" className="feedback-button-playagain">
              JOGAR NOVAMENTE
            </button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { playerImage, playerName, playerScore } = this.state;
    return (
      <div className="header-container">
        <header className="feedback-header">
          <div style={{ display: 'flex' }}>
            <img
              className="player-profile-img-header"
              alt="player-profile"
              src={playerImage}
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
          {this.renderFeedbackScreen()}
          {Feedback.renderButtons()}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default Feedback;
// export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
