import React from 'react';
import './ShuffledButtons.css';
import questions from '../dataTest';

class ShuffledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      disabledBtn: false,
      correctAnswerClass: '',
      wrongAnswerClass: '',
      allAnswers: [],
    }
  }

  checkAnswer = (stringToTest, objQuestion) => {
    this.setState({
      correctAnswerClass: 'correct-answer',
      wrongAnswerClass: 'wrong-answer',
      disabledBtn: true,
    });
    // if (stringToTest === objQuestion.correct_answer) return console.log(stringToTest);
    // return console.log('wrooong');
  }
  
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
    const { allAnswers, correctAnswerClass, wrongAnswerClass, questionIndex } = this.state;
    if (!this.shouldShowAnswers()) return null
    return (
      <div>
        <div className="answers-buttons">
          {allAnswers[questionIndex].map((button) => {
            if (button === results[questionIndex].correct_answer) {
              return <button className={correctAnswerClass} onClick={() => this.checkAnswer(button )} key={button}>{button}</button>
            }
            return <button className={wrongAnswerClass} onClick={() => this.checkAnswer(button )} key={button}>{button}</button>
          })}
        </div>
      </div>
    )
  }
}

export default ShuffledButtons;
