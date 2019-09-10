import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Signup from './components/Signup';
import Signin from "./components/Signin"
import Profile from './components/Profile';
import Users from './components/User';
import EditProfile from './components/EditProfile'

const Routes = (
    <Router>
        <div>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/Signup" component={Signup}/>
            <Route exact path ="/Signin" component={Signin}/>
            <Route exact path ="/profile" component={Profile}/>
            <Route exact path ="/users" component={Users}/>
            <Route exact path ="/edit" component={EditProfile}/>



        </div>
    </Router>
    
)

export default Routes;