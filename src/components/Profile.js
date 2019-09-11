import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../NavBar'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      posts: [],
      current_item: undefined
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(post) {
    console.log(post.data)
    this.setState({current_item: post})
  }

  componentDidMount() {
    const POSTS_API = "http://localhost:3001/api/posts.json";
    const USERS_API = "http://localhost:3001/api/users/:id.json";
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
                <Col xs={6} md={4}>
                    <Image width={200} height={200} src={this.state.user.profile_photo} roundedCircle/>
                </Col>
                <Col xs={6} md={4}>
                    
                    <h1>{this.state.user.name}<span><Button href={`#/edit`}>Edit Profile</Button></span></h1>
                    <Button>Follow</Button>
                    <p><strong>{this.state.user.followings_count} followers</strong></p>
                    <p><strong>{this.state.user.followers_count} followings</strong></p> <br/>
                    <h6>Bio:<span><p>{this.state.user.bio}</p></span></h6>
                </Col>
            </Row>
        </Container> 

        <Container>
          <Row>
            <Col style={{display: "inline-block", width:200}}>
              <Gallery posts={this.state.posts} onClick={this._handleClick}/>
            </Col>
          </Row>
        </Container>  
      </div>
    )
  }
}

const Gallery = (props) => {
  return (
    <div>
      {props.posts.map((p) => {
        return(
          <div key={p.id}>
            <Link to="/show" onClick={props.onClick} key={p.id}><Image src={p.post_image} alt={p.id}width={300} height={300}/></Link>
          </div>
        )
      })}
    </div>
  )
}

export default Profile;
