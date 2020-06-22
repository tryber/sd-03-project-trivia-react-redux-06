import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allAnswersAction } from '../../actions/allAnswersAction';
import './ShuffledButtons.css';

const arrWithAllButtons = (objQuestion) => {
  const allAnswers = [objQuestion.correct_answer, ...objQuestion.incorrect_answers];
  return allAnswers;
};

const shuffleAnswers = (array) => {
  let currentIndex = array.length;
  let temporaryValue = [];
  let randomIndex;
  const newArr = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = newArr[currentIndex];
    newArr[currentIndex] = newArr[randomIndex];
    newArr[randomIndex] = temporaryValue;
  }
  return newArr;
};

class ShuffledButtons extends React.Component {
  componentDidMount() {
    const { questionsArr, allAnswersDispatch } = this.props;
    const allAnswersArr = questionsArr
      .map((question) => shuffleAnswers(arrWithAllButtons(question)));
    allAnswersDispatch(allAnswersArr);
  }

  shouldShowAnswers() {
    const { allAnswers } = this.props;
    return allAnswers.length > 0;
  }

  renderButton(value, className, key, datatestId, index) {
    const { disabledBtn, answerChoosed } = this.props;
    return (
      <div className="button-display question-button">
        <div>
          <p className="button-display-text">{index + 1}</p>
        </div>
        <div>
          <button
            data-testid={datatestId}
            type="button"
            value={value}
            disabled={disabledBtn}
            className={`${className} button-style`}
            onClick={answerChoosed}
            key={key}
          >
            {value}
          </button>
        </div>
      </div>
    );
  }

  render() {
    const {
      questionsArr,
      questionIndex,
      wrongAnswerClass,
      correctAnswerClass,
      allAnswers,
    } = this.props;
    if (!this.shouldShowAnswers()) return null;
    return (
      <div className="answers-buttons">
        {allAnswers[questionIndex].map((button, index) => {
          if (button === questionsArr[questionIndex].correct_answer) {
            return this.renderButton(
              button,
              correctAnswerClass,
              button,
              'correct-answer',
              index,
            );
          }
          return this.renderButton(
            button,
            wrongAnswerClass,
            button,
            `wrong-answer-${index}`,
            index,
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  questionsArr: state.apiQuestionsReducer.questions.results,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  correctAnswerClass: state.questionsDataReducer.correctAnswerClass,
  disabledBtn: state.questionsDataReducer.disabledBtn,
  allAnswers: state.allAnswersReducer.allAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  allAnswersDispatch: (arrayOfAnswers) => dispatch(allAnswersAction(arrayOfAnswers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShuffledButtons);

ShuffledButtons.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  answerChoosed: PropTypes.func.isRequired,
  allAnswersDispatch: PropTypes.func.isRequired,
  wrongAnswerClass: PropTypes.string,
  correctAnswerClass: PropTypes.string,
  disabledBtn: PropTypes.bool.isRequired,
  questionsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  allAnswers: PropTypes.arrayOf(PropTypes.array).isRequired,
};

ShuffledButtons.defaultProps = {
  wrongAnswerClass: '',
  correctAnswerClass: '',
};
