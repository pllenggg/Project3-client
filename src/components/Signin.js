import React, { Component } from 'react';
import SigninForm from './SigninForm';
import axios from "axios";


const SERVER = "https://meowserver.herokuapp.com"



class Signin extends Component {
  constructor() {
      super();
        this.state = {
            email: "",
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
              "email": this.state.email,
              "password": this.state.password
          }
      } 
      const url = `${SERVER}/api/user_token`
      console.log(request);
      axios.post(url, request).then(response => {
          console.log(response)
        let token = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", token);
        return axios.get(`${SERVER}/api/users/current.json`, {headers: {'Authorization': token}});
      }).then (results => {
        localStorage.setItem ("user_id", results.data.id);
        console.log(localStorage.user_id)
        localStorage.setItem ("user_name", results.data.name);
        this.props.history.push("/profile");
      })
      .catch(err => {
          console.log("error", err);
      })
  }
  render() {
    
    return (
      <div>
          <SigninForm
            onTyping = {this._handleChange}
            onSubmit = {this._handleSubmit}
          />

      </div>
    );
  }
}

export default Signin;
