import React, { Component } from 'react';

class SignOut extends Component {
  constructor () {
    super();
  }

  render () {
    localStorage.removeItem('jwt');
    this.props.history.push("/");
    window.location.reload();
    return;
  }
}

export default SignOut;