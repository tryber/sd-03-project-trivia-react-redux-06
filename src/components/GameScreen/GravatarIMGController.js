import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GravatarIMGController = (props) => {
  const { profilePicGravatar } = props;
  if (profilePicGravatar.url !== '') {
    return (
      <img src={profilePicGravatar.url} alt="profile" data-testid="header-profile-picture" />
    );
  }
  return <img src="http://www.gravatar.com/avatar" alt="Default Profile" data-testid="header-profile-picture" />;
};

const mapStateToProps = (state) => ({
  profilePicGravatar: state.gravatarReducer.picture,
});

export default connect(mapStateToProps)(GravatarIMGController);

GravatarIMGController.propTypes = {
  profilePicGravatar: PropTypes.objectOf(PropTypes.any),
};

GravatarIMGController.defaultProps = {
  profilePicGravatar: {},
};
