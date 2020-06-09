import React from 'react';
import { connect } from 'react-redux';
import { checkAnswerAction } from '../../actions/checkAnswerAction';
import './ShuffledButtons.css';
import questions from '../dataTest';

class ShuffledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: [],
    }
  }

  // checkAnswer = (stringToTest, objQuestion) => {
  //   this.setState({
  //     correctAnswerClass: 'correct-answer',
  //     wrongAnswerClass: 'wrong-answer',
  //     disabledBtn: true,
  //   });
  //   if (stringToTest === objQuestion.correct_answer) return console.log(stringToTest);
  //   return console.log('wrooong');
  // }
  
  arrWithAllButtons = (objQuestion) => {
    const { incorrect_answers, correct_answer } = objQuestion;
    const { disabledBtn, correctAnswerClass, wrongAnswerClass } = this.state;
  
    const allAnswers = [
      correct_answer,
      ...incorrect_answers,
    ];
    return allAnswers;
  }
  
  shuffleAnswers = (array) => {
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
  }

  componentDidMount() {
    const { results } = questions;
    const allAnswersArr = results.map((question) => 
      this.shuffleAnswers(this.arrWithAllButtons(question)));
    this.setState({ allAnswers: allAnswersArr });
  }

  shouldShowAnswers() {
    return this.state.allAnswers.length > 0
  }

  render() {
    const { results } = questions;
    const { questionIndex, checkAnswer, wrongAnswerClass, correctAnswerClass, disabledBtn } = this.props;
    const { allAnswers } = this.state;
    if (!this.shouldShowAnswers()) return null
    return (
      <div>
        <div className="answers-buttons">
          {allAnswers[questionIndex].map((button) => {
            if (button === results[questionIndex].correct_answer) {
              return <button disabled={disabledBtn} className={correctAnswerClass} onClick={checkAnswer} key={button}>{button}</button>
            }
            return <button disabled={disabledBtn} className={wrongAnswerClass} onClick={checkAnswer} key={button}>{button}</button>
          })}
        </div>
      </div>
    )
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ShuffledButtons);
