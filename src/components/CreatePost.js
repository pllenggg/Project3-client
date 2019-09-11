import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = { caption: '', post_image: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  };



  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  _handleSubmit(event) {
    event.preventDefault();
    const POSTS_API = 'http://localhost:3001/api/posts.json'
    const token = "Bearer " + localStorage.getItem("jwt");
    const data = { caption: this.state.caption, post_image: this.state.post_image }

   axios({method: 'post', url: POSTS_API, headers: {'Authorization': token}, data: { data }
    }).then((results) => {
      console.log(results.data)
    })
  }
  

  uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: 'dluw1enan', upload_preset: 'pd78zj38' },
      (error, result) => {
        if (result) {
          const data = result[0];
          console.log(data, "successfully opened")
        } else {
          console.log(error);
        }
      })
  }

  render(){
    return (
      <div >
        <Form onSubmit={this._handleSubmit} >
          <Form.Group controlId="caption">
            <Form.Label>Caption:</Form.Label>
            <Form.Control placeholder="Write your caption" name="caption" value={this.state.caption} onChange={this._handleChange} required maxLength="100" />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder="Add Image URL ..." type="text" name="post_image" value={this.state.post_image} onChange={this._handleChange} readOnly="true"></Form.Control>
            <Button variant="info" onClick={this.uploadWidget.bind(this)}>Select Image</Button>
            
          </Form.Group>
          <Button variant="info" type="submit">Share</Button>
        </Form>
      </div >
    )
  }
}
export default CreatePost;
