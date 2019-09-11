import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Signup from './components/Signup';
import Signin from "./components/Signin"
import Profile from './components/Profile';
import Users from './components/User';
import EditProfile from './components/EditProfile'
import ShowPost from './components/ShowPost'
import Logout from './components/Logout'
import CreatePost from './components/CreatePost';

const Routes = (
    <Router>
        <div>
            
            <Route exact path ="/" component={Signin}/>
            <Route exact path ="/Signup" component={Signup}/>
            <Route exact path ="/feed" component={Home}/>
            <Route exact path ="/profile" component={Profile}/>
            <Route exact path ="/logout" component={Logout}/>
            <Route exact path ="/users" component={Users}/>
            <Route exact path ="/edit" component={EditProfile}/>
            <Route exact path ="/add" component={CreatePost}/>
            <Route path ="/show/:id" component= {ShowPost}/>
        </div>
    </Router>
    
)

export default Routes;