import React from 'react';
import './QuestionsInfos.css';
import questions from '../dataTest';
import ShuffledButtons from './ShuffledButtons';

class QuestionsInfos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionIndex: 0
    }
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    this.setState((state) => ({ questionIndex: state.questionIndex + 1}))
  }

  render() {
    const { results } = questions;
    const { questionIndex } = this.state;
    const question = results[questionIndex];
    return (
      <section>
        <div className="questions-container">
          <div className="questions-header">
            <span data-testid="question-category">{question.category}</span>
            <p data-testid="question-text">{question.question}</p>
          </div>
          <div className="answers-buttons">
            <ShuffledButtons question={question} />
          </div>
        </div>
        <button type="button" onClick={this.nextQuestion} >Próxima</button>
      </section>
    )
  }
}

export default QuestionsInfos;
