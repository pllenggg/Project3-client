import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Signup from './components/Signup';
import Signin from "./components/Signin"
import Profile from './components/Profile';
import EditProfile from './components/EditProfile'
import Signout from './components/Signout'
import CreatePost from './components/CreatePost';
import Search from './components/Search';
import showUser from './components/showUser';

const Routes = (
    <Router>
        <div>
            
            <Route exact path ="/" component={Signin}/>
            <Route exact path ="/Signup" component={Signup}/>
            <Route exact path ="/profile" component={Profile}/>
            <Route exact path ="/signout" component={Signout}/>
            <Route exact path ="/edit" component={EditProfile}/>
            <Route exact path ="/add" component={CreatePost}/>
            <Route path ="/profile/:id" component= {showUser}/>
            <Route exact path ="/search" component={Search}/>
        </div>
    </Router>
    
)

export default Routes;