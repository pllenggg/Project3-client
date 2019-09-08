import React, { Component } from 'react';
import axios from 'axios';

const USER_API = 'http://localhost:3000/api/users.json'

class User extends Component {
  constructor() {
    super();
    this.state = {
        users: []
    };
  }

  componentDidMount() {
      axios.get(USER_API).then((results) => {
        //   console.log(results.data);
            this.setState({users: results.data})
      })
  }

  render() {
    return (
        <div>
            <h2>All users </h2>
            <div>
                {this.state.users.map((user) => {
                    return(
                        <div key={user.id}>
                            <p>{user.username}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
  }
}

export default User;
