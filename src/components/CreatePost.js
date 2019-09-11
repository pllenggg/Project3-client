import React, { Component } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import NavBar from '../NavBar';
import axios from 'axios';

class CreatePost extends Component {
  constructor() {
    super();
    this.state={
      form: {
        post_image: '',
        caption: ''
      }
    }
    this.uploadWidget = this.uploadWidget.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.savePost = this.savePost.bind(this);
  };//constructor ended here

  uploadWidget() {
    window.cloudinary.openUploadWidget({cloud_name:"dluw1enan", upload_preset:"pd78zj38"}, (err,result) => {
      if(result) {
        const image = result[0];
        const newFormImg = {post_image: image.secure_url};
        this.setState(({ form }) => {
          return{
            form: {
              ...form,
              ...newFormImg
            }
          }
        })
      }
    })
  } //uploadWidget

  _handleChange(event){
    const newFormData = {
      [event.target.name]: event.target.value
    }
    this.setState(({ form }) => {
      return {
        form: {
          ...form,
          ...newFormData
        }
      }
    })
  }//handlechange

  savePost(post) {
    const url = 'https://meowserver.herokuapp.com/api/posts.json'
    let token = "Bearer "+localStorage.getItem('jwt');
    axios({method:"post", url: url, header:{'Authorization': token}, data: post}).then(()=> {
      console.log(post);
      this.history.push(-1);
    });
  }//savePost

  _handleSubmit(e) {
    e.preventDefault();
    const { form } = this.state
    const data = {
      caption: form.caption,
      post_image: form.post_image
    }
    console.log(data)
    // this.props.onSubmit(data);
  }//handlesubmit
  render(){
    const { form } = this.state;
    return(
      <div>
        <NavBar/>
        <Container>
          <Form onSubmit= {this.savePost}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control name="post_image" value={form.post_image} type="text" placeholder="img URL here.." onChange={this._handleChange}/>
              <Button onClick={this.uploadWidget}>Upload</Button>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Caption</Form.Label>
              <Form.Control type="text" name="caption" value={form.caption} onChange={this._handleChange} placeholder="what's on today?" />
            </Form.Group>

            <Button type="submit">Share</Button>

          </Form>
        </Container>
      </div>
    )
  }
}// class component end here
export default CreatePost;
