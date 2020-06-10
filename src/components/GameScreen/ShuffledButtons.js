import React from 'react';
import { connect } from 'react-redux';
import { checkAnswerAction } from '../../actions/checkAnswerAction';
import './ShuffledButtons.css';
import questions from '../dataTest';

const arrWithAllButtons = (objQuestion) => {
  const allAnswers = [objQuestion.correct_answer, ...objQuestion.incorrect_answers];
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
      checkAnswer,
      wrongAnswerClass,
      correctAnswerClass,
      disabledBtn,
    } = this.props;
    const { allAnswers } = this.state;
    if (!this.shouldShowAnswers()) return null;
    return (
      <div className="answers-buttons">
        {allAnswers[questionIndex].map((button) => {
          if (button === results[questionIndex].correct_answer) {
            return (
              <button
                type="button"
                disabled={disabledBtn}
                className={correctAnswerClass}
                onClick={checkAnswer}
                key={button}
              >
                {button}
              </button>
            );
          }
          return (
            <button
              type="button"
              disabled={disabledBtn}
              className={wrongAnswerClass}
              onClick={checkAnswer}
              key={button}
            >
              {button}
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

const mapDispatchToProps = (dispatch) => ({
  checkAnswer: () => dispatch(checkAnswerAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShuffledButtons);
