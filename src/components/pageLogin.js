import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class pageLogin extends React.Component {
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
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderLogin() {
    return (
      <div style={{
        width: 400,
        margin: '40px auto',
      }}
      >
        <label>E-mail do Gravatar:</label>
        <input
          plasceholder="Email Gravatar"
          type="email"
          data-testid="input-player-name"
          onChange={(e) => this.handleChange(e)}
          name="username"
        />
        <label>Nome do Jogador:</label>
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
      <div style={{
        width: 400,
        margin: '40px auto',
      }}
      >
        <Link to="/game">
          <button
            type="button"
            data-testid="btn-play"
            disabled={disabled}
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
        <div>
          {pageLogin.renderSettings()}
        </div>
        {this.renderLogin()}
        {this.renderJogar()}
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


export default connect(mapStateToProps)(pageLogin);
