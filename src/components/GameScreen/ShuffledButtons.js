import React from 'react';
import { connect } from 'react-redux';
import './ShuffledButtons.css';
import questions from '../dataTest';

const arrWithAllButtons = (objQuestion) => {
  const allAnswers = [
    objQuestion.correct_answer,
    ...objQuestion.incorrect_answers,
  ];
  return allAnswers;
};

const shuffleAnswers = (array) => {
  let currentIndex = array.length;
  let temporaryValue = [];
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

class ShuffledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: [],
    };
  }

  componentDidMount() {
    const { results } = questions;
    const allAnswersArr = results.map((question) => shuffleAnswers(arrWithAllButtons(question)));
    this.setState({ allAnswers: allAnswersArr });
  }

  shouldShowAnswers() {
    const { allAnswers } = this.state;
    return allAnswers.length > 0;
  }

  render() {
    const { results } = questions;
    const {
      questionIndex,
      answerChoosed,
      wrongAnswerClass,
      correctAnswerClass,
      disabledBtn,
    } = this.props;
    const { allAnswers } = this.state;
    if (!this.shouldShowAnswers()) return null;
    return (
      <div className="answers-buttons">
        {allAnswers[questionIndex].map((button, index) => {
          if (button === results[questionIndex].correct_answer) {
            return (
              <button
                type="button"
                value={button}
                disabled={disabledBtn}
                className={`${correctAnswerClass} question-button`}
                onClick={answerChoosed}
                key={button}
              >
                <div className="button-display">
                  <div className="button-display-text">
                    <p className="button-text">{index + 1}</p>
                  </div>
                  <div>
                    <p>{button}</p>
                  </div>
                </div>
              </button>
            );
          }
          return (
            <button
              type="button"
              value={button}
              disabled={disabledBtn}
              className={`${wrongAnswerClass} question-button`}
              onClick={answerChoosed}
              key={button}
            >
              <div className="button-display">
                <div className="button-display-text">
                  <p className="button-text">{index + 1}</p>
                </div>
                <div>
                  <p>{button}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  correctAnswerClass: state.questionsDataReducer.correctAnswerClass,
  disabledBtn: state.questionsDataReducer.disabledBtn,
});

export default connect(mapStateToProps)(ShuffledButtons);
