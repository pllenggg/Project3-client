import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email: '',
        password: '', 
        confirm_password: '',
        error:''
    };
    this._handleName = this._handleName.bind(this);
    this._handleEmail = this._handleEmail.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
    this._handleConfirmPassword = this._handleConfirmPassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const SERVER = "http://localhost:3001/"
    const users_url = 'http://localhost:3001/api/users.json';
    
    axios.post(users_url, {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirm_password,
      }
    }).then(result => {
      console.log(result);

      const LoginURL = `${SERVER}/api/user_token`
      axios.post(LoginURL, {
        auth: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then((results) => {
        console.log(results.data);
          console.log(window)
          localStorage.setItem("jwt", results.data.jwt);
          this.setState({error: ""});
          this.props.history.push('/');
          window.location.reload();
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({ error: "Try again"})
      })
    })
  }

  _handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  _handleEmail(e) {
    this.setState({ email: e.target.value })
  }

  _handlePassword(e) {
    this.setState({ password: e.target.value })
  }

  _handleConfirmPassword(e) {
    this.setState({ confirm_password: e.target.value })
  }



  render() {
    return (
      <div>
          <SignupForm
          typingName= {this._handleName}
          typingEmail = {this._handleEmail}
          typingPassword = {this._handlePassword}
          typingConfirmation = {this._handleConfirmPassword}
          />
      </div>
    );
  }
}

export default Signup;
