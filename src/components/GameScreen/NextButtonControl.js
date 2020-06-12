import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { newQuestionAction } from '../../actions/newQuestionAction';

class NextButtonControl extends React.Component {
  constructor(props) {
    super(props);
    this.nextPageControler = this.nextPageControler.bind(this);
  }

  nextPageControler() {
    const {
      setNextQuestion, timerFunction, questionIndex, allAnswers, history,
    } = this.props;
    console.log(this.props);
    if ((questionIndex + 1) === allAnswers.length) return history.push('/feedback');
    setNextQuestion();
    return timerFunction();
  }

  render() {
    const { wrongAnswerClass } = this.props;
    if (wrongAnswerClass === '') return null;
    return (
      <div data-testid="btn-next">
        <button
          type="button"
          onClick={this.nextPageControler}
        >
          Próxima
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  allAnswers: state.allAnswersReducer.allAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: () => dispatch(newQuestionAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NextButtonControl));

NextButtonControl.propTypes = {
  allAnswers: PropTypes.arrayOf(PropTypes.array).isRequired,
  questionIndex: PropTypes.number.isRequired,
  setNextQuestion: PropTypes.func.isRequired,
  timerFunction: PropTypes.func.isRequired,
  wrongAnswerClass: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

NextButtonControl.defaultProps = {
  wrongAnswerClass: '',
};
