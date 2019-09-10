import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class ProfileForm extends Component {
    render(props) {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" value={this.props.user.name} onChange={this.props.onEditing}name="name" />

                    <Form.Label>Bio:</Form.Label>
                    <Form.Control type="text" as="textarea" rows="10" value={this.props.user.bio} onChange={this.props.onEditing} name="bio" />

                    <Button type="submit">Save</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default ProfileForm;