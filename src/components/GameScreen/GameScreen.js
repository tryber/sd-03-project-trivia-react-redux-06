import React from 'react';
import Header from './Header';
import QuestionsInfos from './QuestionsInfos';
import silvio from '../../silvio.png';
import './GameScreen.style.css';

class GameScreen extends React.Component {
  render() {
    return (
      <div className="game-screen-container">
        <div className="game-screen-comp">
          <QuestionsInfos />
          <Header />
        </div>
        <div className="silvio-img-container">
          <img src={silvio} className="silvio-img" alt="silvio santos" />
        </div>
      </div>
    );
  }
}

export default GameScreen;
