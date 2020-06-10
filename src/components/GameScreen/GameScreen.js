import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import QuestionsInfos from './QuestionsInfos';

class GameScreen extends React.Component {
  render() {
    const { questionsArr } = this.props;
    if (!questionsArr) return <div>Loading...</div>;
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
