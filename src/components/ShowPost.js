import React, { Component } from 'react';
import Axios from 'axios';

class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        post: {}
    };
  }

  componentDidMount() {
      const post_API = 'https://meowserver.herokuapp.com/api/posts/:id.json';
      const url = post_API.replace(':id', this.props.match.params.id)
      let token = "Bearer " + localStorage.getItem("jwt");
      Axios({method:'get', url: url, headers: {'Authorization': token }})
      .then(result => {
          console.log(result.data);
      })
    }

render() {
    return(
        <div>
            <h1>post is here soon</h1>
        </div>
    )
}

}

export default ShowPost;
