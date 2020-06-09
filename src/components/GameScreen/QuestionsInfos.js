import React from 'react';
import './QuestionsInfos.css';
import questions from '../dataTest';
import ShuffledButtons from './ShuffledButtons';

class QuestionsInfos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionIndex: 0,
      disabledBtn: false,
      correctAnswerClass: '',
      wrongAnswerClass: '',
      answerChoosed: false,
      allAnswers: [],
    }
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    this.setState((state) => ({
      questionIndex: state.questionIndex + 1,
    }))
  }

  // checkAnswer = (stringToTest, objQuestion) => {
  //   this.setState({
  //     correctAnswerClass: 'correct-answer',
  //     wrongAnswerClass: 'wrong-answer',
  //     disabledBtn: true,
  //     answerChoosed: true,
  //   });
  //   if (stringToTest === objQuestion.correct_answer) return console.log(stringToTest)
  //   return console.log('wrooong')
  // }
  
  // arrWithAllButtons = (objQuestion) => {
  //   const { incorrect_answers, correct_answer } = objQuestion;
  //   const { disabledBtn, correctAnswerClass, wrongAnswerClass } = this.state;

  //   const incorrectAnswersArr = incorrect_answers.map((e, index) => 
  //     (<button
  //       className={wrongAnswerClass}
  //       disabled={disabledBtn}
  //       onClick={() => this.checkAnswer(e, objQuestion)}
  //       data-testid={`wrong-answer-${index}`}>
  //         {e}
  //     </button>));
  
  //   const allAnswers = [
  //     <button
  //       className={correctAnswerClass}
  //       disabled={disabledBtn}
  //       onClick={() => this.checkAnswer(correct_answer, objQuestion)}
  //       data-testid="correct-answer">
  //         {correct_answer}
  //     </button>,
  //     ...incorrectAnswersArr,
  //   ];
  //   return allAnswers;
  // }
  
  // shuffleAnswers = (array) => {
  //   let currentIndex = array.length;
  //   let temporaryValue = [];
  //   let randomIndex;
  
  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }
  //   return array;
  // }

  // componentWillMount() {
  //   const { results } = questions;
  //   console.log(results)
  //   const allAnswersArr = results.map((question) => 
  //     this.shuffleAnswers(this.arrWithAllButtons(question)));
  //   this.setState({ allAnswers: allAnswersArr });
  // }

  render() {
    const { questionIndex, allAnswers } = this.state;
    const { results } = questions;
    const question = results[questionIndex];
    return (
      <section>
        <div className="questions-container">
          <div className="questions-header">
            <span data-testid="question-category">{question.category}</span>
            <p data-testid="question-text">{question.question}</p>
          </div>
          <div className="answers-buttons">
            <ShuffledButtons questionIndex={questionIndex} />
          </div>
        </div>
        <button type="button" onClick={this.nextQuestion}>Próxima</button>
      </section>
    )
  }
}

export default QuestionsInfos;


