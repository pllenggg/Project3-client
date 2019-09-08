import React, { Component } from 'react';
import LoginForm from './SigninForm';
import axios from "axios";


const SERVER = "http://localhost:3000"



class Login extends Component {
  constructor() {
      super();
        this.state = {
            username: "",
            password: "",

        }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  
  _handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
        })
  }

  _handleSubmit(e) {
      e.preventDefault();
      const request = {
          "auth": {
              username: this.state.username,
              password: this.state.password
          }
      } 
      const url = `${SERVER}/api/user_token`
      console.log(request);
      axios.post(url, request).then(response => {
          console.log(response.data);
        localStorage.setItem("jwt", response.data.jwt);
        //   this.props.history.push('/');
      })
      .catch(err => {
          console.log("error", err);
      })
  }
  render() {
    
    return (
      <div>
          <LoginForm
            onTyping = {this._handleChange}
            onSubmit = {this._handleSubmit}
          />

      </div>
    );
  }
}

export default Login;
