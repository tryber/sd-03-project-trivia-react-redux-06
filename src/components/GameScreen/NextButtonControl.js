import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    if ((questionIndex + 1) === allAnswers.length) return history.push('/feedback');
    setNextQuestion();
    return timerFunction();
  }

  // nextButton Working

  render() {
    const { wrongAnswerClass, timer } = this.props;
    if (wrongAnswerClass === '' && timer !== 0) return null;
    return (
      <div>
        <button
          className="play-button"
          type="button"
          data-testid="btn-next"
          onClick={this.nextPageControler}
        >
          Próxima
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.questionsDataReducer.index,
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
  allAnswers: state.allAnswersReducer.allAnswers,
  timer: state.questionsDataReducer.timerCount,
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
  timer: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

NextButtonControl.defaultProps = {
  wrongAnswerClass: '',
};
