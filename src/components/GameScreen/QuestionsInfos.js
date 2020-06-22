import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newQuestionAction } from '../../actions/newQuestionAction';
import { timerCountAction } from '../../actions/timerCountAction';
import { timeOutAction } from '../../actions/timeOutAction';
import { checkAnswerAction } from '../../actions/checkAnswerAction';
import './QuestionsInfos.css';
import ShuffledButtons from './ShuffledButtons';
import NextButtonControl from './NextButtonControl';
import logo from '../../show-do-milhão.png';
import playersInfosLocalStorage from '../../service/functionsService';

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

  rankingInfoLocalStorage() {
    const { picture, score, name } = this.props;
    const personObject = { name, score, picture };
    if (localStorage.getItem('ranking')) {
      const rankingArray = JSON.parse(localStorage.getItem('ranking'));
      const newRankingArr = rankingArray.reduce((acc, e) => {
        if (e.name !== name) acc.push(e);
        return acc;
      }, []);
      newRankingArr.push(personObject);
      return localStorage.setItem('ranking', JSON.stringify(newRankingArr));
    }
    const rankingArray = [];
    rankingArray.push(personObject);
    return localStorage.setItem('ranking', JSON.stringify(rankingArray));
  }

  async answerChoosed(event) {
    const dif = {
      hard: 3,
      medium: 2,
      easy: 1,
    };
    const {
      timer, checkAnswer, questionsArr, questionIndex,
    } = this.props;
    let points = 0;
    let assertion = 0;
    const questionAnswer = questionsArr[questionIndex];
    if (event.target.value === questionAnswer.correct_answer) {
      points = 10 + (timer * dif[questionAnswer.difficulty]);
      assertion = 1;
    }
    await checkAnswer(points, assertion);
    const {
      assertions, score, name, gravatarEmail,
    } = this.props;
    playersInfosLocalStorage(assertions, score, name, gravatarEmail);
    this.rankingInfoLocalStorage();
    return clearInterval(this.interval);
  }

  render() {
    const { questionIndex, timer, questionsArr } = this.props;
    const question = questionsArr[questionIndex];
    return (
      <div className="questions-display">
        <section>
          <img src={logo} width="400px" alt="logo" />
          <div className="questions-container">
            <div className="questions-header">
              <span data-testid="question-category">{question.category}</span>
              <div>
                <p data-testid="question-text">{`${question.question}`}</p>
                <p>
                  {`Tempo restante: ${timer}s`}
                </p>
              </div>
            </div>
            <div className="shuffled-buttons">
              <ShuffledButtons answerChoosed={this.answerChoosed} />
            </div>
            <NextButtonControl timerFunction={this.timerFunction} />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  name: state.playersInfoReducer.username,
  picture: state.gravatarReducer.picture.url,
  gravatarEmail: state.playersInfoReducer.email,
  score: state.questionsDataReducer.points,
  assertions: state.questionsDataReducer.assertions,
  questionsArr: state.apiQuestionsReducer.questions.results,
  timer: state.questionsDataReducer.timerCount,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
});

const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: () => dispatch(newQuestionAction()),
  timerCount: () => dispatch(timerCountAction()),
  timeOut: () => dispatch(timeOutAction()),
  checkAnswer: (points, assertions) => dispatch(checkAnswerAction(points, assertions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsInfos);

QuestionsInfos.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  questionsArr: PropTypes.arrayOf(PropTypes.object),
  timer: PropTypes.number.isRequired,
  timeOut: PropTypes.func.isRequired,
  timerCount: PropTypes.func.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string,
  picture: PropTypes.string,
};

QuestionsInfos.defaultProps = {
  questionsArr: [],
  picture: '',
  gravatarEmail: '',
};
