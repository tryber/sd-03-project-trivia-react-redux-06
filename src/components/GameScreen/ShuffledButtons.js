import React from 'react';
import './ShuffledButtons.css';
import questions from '../dataTest';

class ShuffledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      answerChoosed: true,
    });
    if (stringToTest === objQuestion.correct_answer) return console.log(stringToTest)
    return console.log('wrooong')
  }
  
  arrWithAllButtons = (objQuestion) => {
    const { incorrect_answers, correct_answer } = objQuestion;
    const { disabledBtn, correctAnswerClass, wrongAnswerClass } = this.state;

    const incorrectAnswersArr = incorrect_answers.map((e, index) => 
      (<button
        className={wrongAnswerClass}
        disabled={disabledBtn}
        onClick={() => this.checkAnswer(e, objQuestion)}
        data-testid={`wrong-answer-${index}`}>
          {e}
      </button>));
  
    const allAnswers = [
      <button
        className={correctAnswerClass}
        disabled={disabledBtn}
        onClick={() => this.checkAnswer(correct_answer, objQuestion)}
        data-testid="correct-answer">
          {correct_answer}
      </button>,
      ...incorrectAnswersArr,
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

  componentWillMount() {
    const { results } = questions;
    console.log(results)
    const allAnswersArr = results.map((question) => 
      this.shuffleAnswers(this.arrWithAllButtons(question)));
    this.setState({ allAnswers: allAnswersArr });
    console.log()
  }

  render() {
    const { questionIndex } = this.props;
    const { allAnswers } = this.state;
      return (
        <div>
          {allAnswers[questionIndex].map((button) =>
            (<div key={button.props.children}>{button}</div>))
          }
        </div>
      )
  }
}

export default ShuffledButtons;
