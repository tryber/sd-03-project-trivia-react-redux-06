import React from 'react';
import { connect } from 'react-redux';
import { newQuestionAction } from '../../actions/newQuestionAction';
import { timerCountAction } from '../../actions/timerCountAction';
import { timeOutAction } from '../../actions/timeOutAction';
import { checkAnswerAction } from '../../actions/checkAnswerAction';
import './QuestionsInfos.css';
// import questions from '../dataTest';
import ShuffledButtons from './ShuffledButtons';
import NextButtonControl from './NextButtonControl';

class QuestionsInfos extends React.Component {
  constructor(props) {
    super(props);
    this.answerChoosed = this.answerChoosed.bind(this);
    this.timerFunction = this.timerFunction.bind(this);
  }

  componentDidMount() {
    this.timerFunction();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timerFunction() {
    this.interval = setInterval(() => {
      const { timerCount, timer, timeOut } = this.props;

      if (timer === 0) {
        timeOut();
        return clearInterval(this.interval);
      }

      return timerCount();
    }, 1000);
  }

  answerChoosed(event) {
    const { timer, difficulty, checkAnswer, questionsArr, questionIndex } = this.props;
    let points = 0;
    const questionAnswer = questionsArr[questionIndex];
    if (event.target.value === questionAnswer.correct_answer) points = 10 + (timer * difficulty);
    checkAnswer(points);
    return clearInterval(this.interval);
  }

  render() {
    const { questionIndex, timer, questionsArr } = this.props;
    // console.log(this.props);
    // const { results } = questions;
    const question = questionsArr[questionIndex];
    return (
      <section>
        <div className="questions-container">
          <div className="questions-header">
            <span data-testid="question-category">{question.category}</span>
            <p data-testid="question-text">{question.question}</p>
          </div>
          <ShuffledButtons answerChoosed={this.answerChoosed} />
        </div>
        <NextButtonControl timerFunction={this.timerFunction} />
        <span>{timer}</span>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  questionsArr: state.apiQuestionsReducer.questions.results,
  timer: state.questionsDataReducer.timerCount,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  difficulty: state.questionsDataReducer.difficulty,
});

const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: () => dispatch(newQuestionAction()),
  timerCount: () => dispatch(timerCountAction()),
  timeOut: () => dispatch(timeOutAction()),
  checkAnswer: (points) => dispatch(checkAnswerAction(points)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsInfos);
