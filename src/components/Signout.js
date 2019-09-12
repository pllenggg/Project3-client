import React, { Component } from 'react';

class SignOut extends Component {
  constructor () {
    super();
  }

  render () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_id');
    localStorage.romoveItem("user_name");
    this.props.history.push("/");
    window.location.reload();
    return;
  }
}

export default SignOut;