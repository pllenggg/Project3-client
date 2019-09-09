import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const USER_API = "http://localhost:3000/api/users.json"
    let token = "Bearer " + localStorage.getItem("jwt");
      axios({method: 'get', 
              url: USER_API, 
              headers: {'Authorization': token }})
      .then(response => { 
        console.log(response.data)
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return(
      <div>
        <h2>Profile is coming soon</h2>
      </div>
    )
  }
}

export default Profile;
