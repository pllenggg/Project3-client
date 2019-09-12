import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../NavBar'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import '../css/profile.css'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      posts: [],
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(post) {
    console.log(post.data)
    this.setState({current_item: post})
  }

  componentDidMount() {
    const POSTS_API = "https://meowserver.herokuapp.com/api/posts.json";
    const USERS_API = "https://meowserver.herokuapp.com/api/users/:id.json";
    // const POSTS_API = "http://localhost:3001/api/posts.json";
    // const USERS_API = "http://localhost:3001/api/users/:id.json";
    
    const current_user_api = USERS_API.replace(':id', localStorage.user_id);
    const login_id = (localStorage.user_id);

    let token = "Bearer " + localStorage.getItem("jwt");
    
      axios({method: 'get', 
      url: current_user_api, 
      headers: {'Authorization': token }})
      .then(response => { 
      console.log(response.data)
      this.setState({user: response.data})
      })
      .catch(error => console.log('error', error));

      axios.get(POSTS_API).then(results => {
      let data = (results.data.filter((p) => p.user_id === login_id));
      this.setState({ posts: data })          
})
  }

  render() {
    return(
      <div>
        <Navigation/>  
        <Container>
            <Row>
                <Col className="profile_photo" xs={6} md={4}>
                    <Image width={200} height={200} src={this.state.user.profile_photo} roundedCircle/>
                </Col>
                <Col xs={6} md={4}>
                    
                    <h1>{this.state.user.name}<span><Button variant="outline-dark" href={`#/edit`}>Edit Profile</Button></span></h1>
                    <p><strong>{this.state.user.followings_count} followers</strong> |  
                     <span><strong>{this.state.user.followers_count} followings</strong></span>
                    </p> <br/>
                    <h6><strong>Bio:</strong><span><p>{this.state.user.bio}</p></span></h6>
                    <Button size="sm" block variant="dark">Follow</Button>
                </Col>
            </Row>
        </Container> 
        <Container>
          <div className='gridContainer'>
        <Gallery posts={this.state.posts} onClick={this._handleClick}/>
        </div>  
        </Container>
      </div>
    )
  }
}

const Gallery = (props) => {
  return (
    <div className="gallery">
      {props.posts.map((p) => {
        return(
                <Image className='gridItem' src={p.post_image} alt={p.id} width={300} height={ 300 } rounded />
        )
      })}
    </div>
  )
}

export default Profile;
