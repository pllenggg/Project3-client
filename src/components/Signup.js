import React, { Component } from 'react';
// import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        email: '',
        password: '', 
        confirm_password: ''
    };
  }

  render() {
    return (
      <div>
          <form>
            <label>Username</label>
            <input type="text" name="username" placeholder="Jess" required/>

            <label>Email</label>
            <input type="email" name="email" placeholder="jess@ga.co" required/>

            <label>Password</label>
            <input type="password" name="password" required/>

            <label>Confirm Password</label>
            <input type="password" name="password" required/>

            <input type="submit"/>
          </form>
      </div>
    );
  }
}

export default Signup;
