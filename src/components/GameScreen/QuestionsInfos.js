import React from 'react';
import { connect } from 'react-redux';
import { newQuestionAction } from '../../actions/newQuestionAction'
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

  render() {
    const { setIndex } = this.props;
    const { questionIndex } = this.state;
    const { results } = questions;
    const question = results[questionIndex];
    return (
      <section>
        <div className="questions-container">
          <div className="questions-header">
            <span data-testid="question-category">{question.category}</span>
            <p data-testid="question-text">{question.question}</p>
          </div>
          <ShuffledButtons />
        </div>
        <button type="button" onClick={setIndex}>Próxima</button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
});

const mapDispatchToProps = (dispatch) => ({
  setIndex: () => dispatch(newQuestionAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsInfos);
