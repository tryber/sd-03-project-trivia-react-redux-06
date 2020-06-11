import React from 'react';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { thunkQuestions, thunkToken, questionsAction } from '../../actions';
import { pegarEmail } from '../../actions/gravatarAction';
import { dadosUser } from '../../actions/dadosUser';


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
    this.gerarTokenQuestions = this.gerarTokenQuestions.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  gerarTokenQuestions() {
    const { email, username } = this.state;
    const {
      importarGravatar,
      setName,
      userToken,
      importedQuestionThunk,
    } = this.props;
    importarGravatar(MD5(email).toString(), email);
    userToken()
      .then(({ token }) => {
        localStorage.setItem('token', token);
        return (importedQuestionThunk(token));
      });
    setName(username);
  }

  renderLogin() {
    return (
      <div>
        <label htmlFor="email">E-mail do Gravatar:</label>
        <input
          plasceholder="Email Gravatar"
          type="text"
          data-testid="input-player-name"
          onChange={(e) => this.handleChange(e)}
          name="email"
        />
        <label htmlFor="name">Nome do Jogador:</label>
        <input
          placeholder="Nome"
          onChange={(e) => this.handleChange(e)}
          name="username"
          type="name"
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
        <Link to="/GameScreen">
          <button
            type="button"
            data-testid="btn-play"
            disabled={disabled}
            onClick={() => this.gerarTokenQuestions()}
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

const mapStateToProps = ({
  gravatarReducer: { email, token },
}) => ({
  email,
  token,
});

const mapDispatch = (dispatch) => ({
  loadingDispatch: () => dispatch(questionsAction()),
  importedQuestionThunk: (token) => (
    dispatch(thunkQuestions(token))
  ),
  userToken: () => dispatch(thunkToken()),
  importarGravatar: (token, email) => dispatch(pegarEmail(token, email)),
  setName: (name) => dispatch(dadosUser(name, '')),
});

export default connect(mapStateToProps, mapDispatch)(LoginContainer);

LoginContainer.propTypes = {
  importedQuestionThunk: PropTypes.func.isRequired,
  userToken: PropTypes.func.isRequired,
  importarGravatar: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
};
