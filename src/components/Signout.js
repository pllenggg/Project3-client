import React, { Component } from 'react';

class SignOut extends Component {

  render () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_id');
    localStorage.removeItem("user_name");
    this.props.history.push("/");
    window.location.reload();
    return;
  }
}

export default SignOut;