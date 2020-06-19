import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import QuestionsInfos from './QuestionsInfos';
import silvio from '../../silvio.png';
import './GameScreen.style.css';

class GameScreen extends React.Component {
  render() {
    const { questionsArr } = this.props;
    if (questionsArr.length === 0) return <div>Loading...</div>;
    return (
      <div className="game-screen-container">
        <div className="game-screen-comp">
          <QuestionsInfos />
          <Header />
        </div>
        <div className="silvio-img-container">
          <div>
            <img src={silvio} className="silvio-img" alt="silvio santos" />
          </div>
        </div>
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
