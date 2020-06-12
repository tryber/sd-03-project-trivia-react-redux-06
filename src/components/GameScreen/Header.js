import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { score, username } = props;
  return (
    <header>
      <img data-testid="header-profile-picture" src="" alt="profile" />
      <span data-testid="header-player-name">{username}</span>
      <span data-testid="header-score">{score}</span>
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
