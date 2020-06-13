import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './LoginPage.style.css'

class LoginContainer extends React.Component {
  static renderSettings() {
    return (
      <div>
        <Link to=" ">
          <button className="play-button">
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
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderLogin() {
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <div>
          <label className="login-label" htmlFor="email">E-mail do Gravatar:</label>
          <input
            className="login-input"
            plasceholder="Email Gravatar"
            type="email"
            data-testid="input-player-name"
            onChange={(e) => this.handleChange(e)}
            name="email"
          />
          </div>
        <div>
          <label className="login-label" htmlFor="name">Nome do Jogador:</label>
          <input
            className="login-input"
            onChange={(e) => this.handleChange(e)}
            name="name"
            type="text"
            data-testid="input-gravatar-email"
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
      <div  style={{marginTop: "20px"}}>
        <Link to=" ">
          <button
            className="play-button"
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


export default connect(mapStateToProps)(LoginContainer);
