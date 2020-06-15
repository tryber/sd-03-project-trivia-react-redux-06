/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './feedback.style.css';
import { connect } from 'react-redux';

export class Feedback extends Component {
  static renderButtons() {
    console.log(localStorage);
    return (
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
  }

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

  render() {
    const {
      questionIndex,
      name,
      score,
      assertions,
      questionsArr,
      timer,
      wrongAnswerClass,
      difficulty,
    } = this.props;

    console.log(questionIndex,
      name,
      score,
      assertions,
      questionsArr,
      timer,
      wrongAnswerClass,
      difficulty);
    return (
      <div className="header-container">
        <header className="feedback-header">
          <div style={{ display: 'flex' }}>
            <img
              className="player-profile-img-header"
              alt="player-profile"
              src=""
              data-testeid="header-profile-picture"
            />
            <p data-testid="header-player-name">
              Jogador:
              <strong>{name}</strong>
            </p>
          </div>
          <div>
            <p data-testid="header-score">
              Pontos:
              <strong>{score}</strong>
            </p>
          </div>
        </header>
        <div className="score-container">
          {/* {this.renderFeedbackScreen()}
          {Feedback.renderButtons()} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  name: state.playersInfoReducer.username,
  score: state.questionsDataReducer.points,
  assertions: state.questionsDataReducer.assertions,
  questionsArr: state.apiQuestionsReducer.questions.results,
  timer: state.questionsDataReducer.timerCount,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  difficulty: state.questionsDataReducer.difficulty,
});

// export default Feedback;
export default connect(mapStateToProps)(Feedback);
