import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newQuestionAction } from '../../actions/newQuestionAction';

const NextButtonControl = (props) => {
  const { setNextQuestion, wrongAnswerClass, timerFunction } = props;
  if (wrongAnswerClass === '') return null;
  return (
    <div>
      <button
        data-testid="btn-next"
        type="button"
        onClick={() => {
          setNextQuestion();
          timerFunction();
        }}
      >
        Próxima
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  wrongAnswerClass: state.questionsDataReducer.wrongAnswerClass,
});

const mapDispatchToProps = (dispatch) => ({
  setNextQuestion: () => dispatch(newQuestionAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextButtonControl);

NextButtonControl.propTypes = {
  setNextQuestion: PropTypes.func.isRequired,
  timerFunction: PropTypes.func.isRequired,
  wrongAnswerClass: PropTypes.string,
};

NextButtonControl.defaultProps = {
  wrongAnswerClass: '',
};