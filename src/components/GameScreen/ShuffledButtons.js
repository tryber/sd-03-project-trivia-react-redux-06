import React from 'react';
import './ShuffledButtons.css';

class ShuffledButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledBtn: false,
      correctAnswerClass: '',
      wrongAnswerClass: '',
      answersArray: [],
    }
  }

  checkAnswer = (stringToTest) => {
    const { question } = this.props;
    this.setState({
      correctAnswerClass: 'correct-answer',
      wrongAnswerClass: 'wrong-answer',
      disabledBtn: true,
    });
    if (stringToTest === question.correct_answer) return console.log(stringToTest)
    return console.log('wrooong')
  }
  
  arrWithAllButtons = (objQuestion) => {
    const { incorrect_answers } = objQuestion;
    const { disabledBtn, correctAnswerClass, wrongAnswerClass } = this.state;

    const incorrectAnswersArr = incorrect_answers.map((e, index) => 
      (<button
        className={wrongAnswerClass}
        disabled={disabledBtn}
        onClick={() => this.checkAnswer(e)}
        data-testid={`wrong-answer-${index}`}>
          {e}
      </button>));
  
    const allAnswers = [
    <button
      className={correctAnswerClass}
      disabled={disabledBtn}
      onClick={() => this.checkAnswer(objQuestion.correct_answer)}
      data-testid="correct-answer">
        {objQuestion.correct_answer}
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

  componentDidMount() {
    const { question } = this.props;
    const kkk = this.shuffleAnswers(this.arrWithAllButtons(question))
    this.setState({ answersArray: kkk })
  }

  componentDidUpdate(_, prevState) {
    if (this.state.answersArray !== prevState.answersArray) {
      const { question } = this.props;
      const kkk = this.shuffleAnswers(this.arrWithAllButtons(question))
      this.setState({ answersArray: kkk })
    }
  }

  render() {
    const { question } = this.props;
    const { answersArray } = this.state;
    // console.log(question)
    return (
      <div>
        {/* {this.shuffleAnswers(this.arrWithAllButtons(question)).map((e) =>
          (<div key={e.props.children}>{e}</div>))
        } */}
        {answersArray.map((e) =>
          (<div key={e.props.children}>{e}</div>))
        }
      </div>
    )
  }
}

export default ShuffledButtons;
