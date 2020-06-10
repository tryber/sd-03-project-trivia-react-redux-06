import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: [],
    };
  }

  componentDidMount() {
    const { questionsArr } = this.props;
    const allAnswersArr = questionsArr
      .map((question) => shuffleAnswers(arrWithAllButtons(question)));
    this.setState({ allAnswers: allAnswersArr });
  }

  shouldShowAnswers() {
    const { allAnswers } = this.state;
    return allAnswers.length > 0;
  }

  render() {
    const {
      questionsArr,
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
        {allAnswers[questionIndex].map((button) => {
          if (button === questionsArr[questionIndex].correct_answer) {
            return (
              <button
                type="button"
                value={button}
                disabled={disabledBtn}
                className={correctAnswerClass}
                onClick={answerChoosed}
                key={button}
              >
                {button}
              </button>
            );
          }
          return (
            <button
              type="button"
              value={button}
              disabled={disabledBtn}
              className={wrongAnswerClass}
              onClick={answerChoosed}
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
  questionsArr: state.apiQuestionsReducer.questions.results,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  correctAnswerClass: state.questionsDataReducer.correctAnswerClass,
  disabledBtn: state.questionsDataReducer.disabledBtn,
});

export default connect(mapStateToProps)(ShuffledButtons);

ShuffledButtons.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  answerChoosed: PropTypes.func.isRequired,
  wrongAnswerClass: PropTypes.string,
  correctAnswerClass: PropTypes.string,
  disabledBtn: PropTypes.bool.isRequired,
  questionsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ShuffledButtons.defaultProps = {
  wrongAnswerClass: '',
  correctAnswerClass: '',
};
