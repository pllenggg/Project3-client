import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Container, InputGroup, FormControl, Button, Row, Col, Image } from "react-bootstrap";
import NavBar from '../NavBar';
import '../css/search.css'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users:[],
        search: '',
        id: this.props.match.params.id
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  //get the data from api 
    componentDidMount(){
    const USERS_API = 'http://localhost:3001/api/users.json'
    const token = "Bearer " + localStorage.getItem('jwt');
    axios({method:'get', url: USERS_API, header: {'Authorization': token} })
    .then((results) => {
        console.log(results.data);
        this.setState({users:results.data});
    });
  }

  _handleChange (e) {
    // console.log(e.target.value.substr(0,20))
    this.setState({
        search: e.target.value.substr(0,20)

    });
  }

  _handleClick(e) {
      console.log(e.target.value);
  }

render(){
    let filteredUsers = this.state.users.filter(user => {
        return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ;
    });
    return(
        <div>
            <NavBar/>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search username"
                                aria-label="search username"
                                aria-describedby="basic-addon2"
                                onChange={this._handleChange}
                                value = {this.state.search}
                            />
                            <InputGroup.Append>
                            <Button type="search"variant="outline-secondary">search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                   
                    {filteredUsers.map(u => {
                        return(
                            <div key={u.id}>
                            <Col key={u.id} sm={4}>
                            <Link to={"/profile/" + u.id}><Image src={u.profile_photo} alt={u.id} key={u.id} width={200} height={200} display="block" roundedCircle/></Link>
                            </Col>
                            <Col sm={8}><h2><strong>{u.name}</strong></h2></Col>    
                            </div>      
                        )
                    })}
                    
                </Row>
            </Container>
        </div>
    )
}
}

export default Search;
