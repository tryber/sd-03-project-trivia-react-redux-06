import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GravatarIMGController from './GravatarIMGController';
import './Header.style.css';

const Header = (props) => {
  const { score, username } = props;
  return (
    <header className="header">
      <div style={{ display: 'flex' }}>
        <GravatarIMGController />
        <p data-testid="header-player-name">{username}</p>
      </div>
      <div>
        <p data-testid="header-score">{score}</p>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  score: state.questionsDataReducer.points,
  username: state.playersInfoReducer.username,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  score: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};
