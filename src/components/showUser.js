import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

class showUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: [],
        posts: [],
        id: this.props.match.params.id
    };
  }

  componentDidMount() {
    const POSTS_API = "http://localhost:3001/api/posts.json";
    const USERS_API = "http://localhost:3001/api/users/:id.json";
    const current_id = this.props.match.params.id;
    const other_users_api = USERS_API.replace(':id', current_id);
   

    let token = "Bearer " + localStorage.getItem("jwt");
    
    axios({method: 'get', 
    url: other_users_api, 
    headers: {'Authorization': token }})
    .then(response => { 
    console.log(response.data)
    this.setState({user: response.data})
    })
    .catch(error => console.log('error', error));

    axios.get(POSTS_API).then(results => {
    let data = (results.data.filter((p) => p.user_id === current_id));
        console.log(current_id)
        console.log(data)
    this.setState({ posts: data }) 
    
    })
  }
  render() {
    return(
      <div>
        <NavBar/>  
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
            <Row>
            
              <Gallery posts={this.state.posts} />
           
              </Row>
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
          
            <Col key={p.id}sm >
            <Link to="/show" key={p.id}><Image className="postimage" src={p.post_image} alt={p.id} display={'inline-block'} width={300} height={300}/></Link>
            </Col>
        
        )
      })}
    </div>
  )
}

export default showUser;
