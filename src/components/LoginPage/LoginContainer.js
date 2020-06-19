import React from 'react';
import PropTypes from 'prop-types';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApiQuestions } from '../../actions/apiQuestionsAction';
import { playersNameAction } from '../../actions/playersNameAction';
import { getApiGravatar } from '../../actions/gravatarAction';
import { gameResetAction } from '../../actions/gameResetAction';
import playersInfosLocalStorage from '../../service/functionsService';
import apiTokenRequest from '../../service/apiTokenRequest';
import './LoginPage.style.css';

class LoginContainer extends React.Component {
  static renderSettings() {
    return (
      <div>
        <Link to="/Settings" data-testid="btn-settings">
          <button type="button" className="play-button">
            CONFIGURAÇÕES
          </button>
        </Link>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    const { gameReset } = this.props;
    gameReset();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async startGame() {
    const {
      apiQuestionsDispatch,
      playersNamesDispatch,
      apiGravatarDispatch,
      assertions,
      score,
      name,
      gravatarEmail,
    } = this.props;
    playersInfosLocalStorage(assertions, score, name, gravatarEmail);
    await apiTokenRequest().then((reponse) => localStorage.setItem('token', reponse.token));
    const { username, email } = this.state;
    playersNamesDispatch(username, email);
    apiGravatarDispatch(CryptoJS.MD5(email).toString().toLowerCase());
    apiQuestionsDispatch(localStorage.getItem('token'));
  }

  renderLogin() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <label className="login-label" htmlFor="email">
            E-mail do Gravatar:
          </label>
          <input
            className="login-input"
            type="text"
            data-testid="input-gravatar-email"
            onChange={(e) => this.handleChange(e)}
            name="email"
          />
        </div>
        <div>
          <label className="login-label" htmlFor="username">
            Nome do Jogador:
          </label>
          <input
            className="login-input"
            onChange={(e) => this.handleChange(e)}
            name="username"
            type="name"
            data-testid="input-player-name"
          />
        </div>
      </div>
    );
  }

  renderJogar() {
    const { username, email } = this.state;
    let disabled = false;
    if (username === '' || email === '') {
      disabled = true;
    }

    return (
      <div style={{ marginTop: '20px' }}>
        <Link to="/game-screen">
          <button
            className="play-button"
            type="button"
            data-testid="btn-play"
            disabled={disabled}
            onClick={this.startGame}
          >
            JOGAR!
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div style={{}}>
        {this.renderLogin()}
        {this.renderJogar()}
        {LoginContainer.renderSettings()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.gravatarReducer.email,
  name: state.playersInfoReducer.username,
  gravatarEmail: state.playersInfoReducer.email,
  score: state.questionsDataReducer.points,
  assertions: state.questionsDataReducer.assertions,
  token: state.gravatarReducer.token,
  apiToken: state.apiQuestionsReducer.questions,
});

const mapDispatchToProps = (dispatch) => ({
  apiQuestionsDispatch: (token) => dispatch(getApiQuestions(token)),
  apiGravatarDispatch: (hash) => dispatch(getApiGravatar(hash)),
  playersNamesDispatch: (username, email) => dispatch(playersNameAction(username, email)),
  gameReset: () => dispatch(gameResetAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

LoginContainer.propTypes = {
  apiQuestionsDispatch: PropTypes.func.isRequired,
  playersNamesDispatch: PropTypes.func.isRequired,
  apiGravatarDispatch: PropTypes.func.isRequired,
  gameReset: PropTypes.func.isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string,
};

LoginContainer.defaultProps = {
  gravatarEmail: '',
};
