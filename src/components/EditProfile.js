import React, { Component } from 'react';
import ProfileForm from './ProfileForm'
import axios from 'axios';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {}
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidMount() {
      const current_user_api = `https://meowserver.herokuapp.com/${localStorage.user_id}.json`
      let token = "Bearer " + localStorage.getItem("jwt");
      axios({method: 'get', 
              url: current_user_api, 
              headers: {'Authorization': token }})
      .then(response => { 
        console.log(response.data)
        this.setState({data: response.data})
      })
      .catch(error => console.log('error', error));
  }

  _handleChange(e) {
      const newData = {
          [e.currentTarget.name] : e.currentTarget.value
      };
      this.setState(({ data }) => {
          return{
              data: {
                  ...data,
                  ...newData
              }
          };
      });
  }

  _handleSubmit(e) {
      e.preventDefault();
      const newProfile = this.state.data
      console.log(newProfile)
      //this is because if the user didnt update anything, it will generate the old info
      const token = "Bearer " + localStorage.getItem("jwt");
      const user_api = `https://meowserver.herokuapp.com/${localStorage.user_id}.json`
      axios( {method: 'patch',
             url: user_api, 
             header: {'Authorization': token },
             data: { newProfile }})
             .then(() => {
                const file = new FormData();
                if(this.state.file)
                file.append('file', this.state.file);
            
                axios({method: 'put', url: user_api, data: file, headers: {'Authorization': token} }).then(() => {
            this.props.history.push(`#/profile`);
                  });
             })
       

} 

  render() {
    return (
        <div>
            <h1> 
                <ProfileForm
                    user={this.state.data}
                    onEditing= {this._handleChange}
                    onSubmit = {this._handleSubmit}
                />
            </h1>
        </div>
    );
  }
}

export default EditProfile;
