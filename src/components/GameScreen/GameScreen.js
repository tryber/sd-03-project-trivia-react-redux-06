import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import QuestionsInfos from './QuestionsInfos';

class GameScreen extends React.Component {
  render() {
    const { questionsArr } = this.props;
    if (questionsArr.length === 0) return <div>Loading...</div>;
    return (
      <div>
        <Header />
        <QuestionsInfos />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionsArr: state.apiQuestionsReducer.questions.results,
});

export default connect(mapStateToProps)(GameScreen);


GameScreen.propTypes = {
  questionsArr: PropTypes.arrayOf(PropTypes.object),
};

GameScreen.defaultProps = {
  questionsArr: [],
};
