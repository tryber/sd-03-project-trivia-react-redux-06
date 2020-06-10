import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApiQuestions } from '../../actions/apiQuestionsAction';
import apiTokenRequest from '../../service/apiTokenRequest';

class LoginContainer extends React.Component {
  static renderSettings() {
    return (
      <div>
        <Link to=" ">
          Settings
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

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async startGame() {
    await apiTokenRequest().then((reponse) => localStorage.setItem('token', reponse.token));
    const { apiQuestionsDispatch } = this.props;
    console.log(typeof localStorage.getItem('token'))
    apiQuestionsDispatch(localStorage.getItem('token'));
  }

  renderLogin() {
    return (
      <div>
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          plasceholder="Email Gravatar"
          type="email"
          data-testid="input-player-name"
          onChange={(e) => this.handleChange(e)}
          name="email"
        />
        <label htmlFor="name">Nome do Jogador:</label>
        <input
          placeholder="Nome"
          onChange={(e) => this.handleChange(e)}
          name="name"
          type="text"
          data-testid="input-gravatar-email"
        />
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
      <div>
        <Link to="/game-screen">
          <button
            type="button"
            data-testid="btn-play"
            // disabled={disabled}
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
      <div>
        {this.renderLogin()}
        {this.renderJogar()}
        {LoginContainer.renderSettings()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.gravatarReducer.email,
  token: state.gravatarReducer.token,
  apiToken: state.apiQuestionsReducer.questions,
});

const mapDispatchToProps = (dispatch) => ({
  apiQuestionsDispatch: (token) => dispatch(getApiQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
