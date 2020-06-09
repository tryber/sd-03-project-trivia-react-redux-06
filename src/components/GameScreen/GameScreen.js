import React from 'react';
import Header from './Header';
import QuestionsInfos from './QuestionsInfos';

class GameScreen extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <QuestionsInfos />
      </div>
    )
  }
}

export default GameScreen;
