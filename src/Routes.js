import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Signup from './components/Signup';
import Signin from "./components/Signin"
import Logout from './components/Logout';
import Users from './components/User';

const Routes = (
    <Router>
        <div>
            <Route exact path ="/" component={Home}/>
            <Route exact path ="/Signup" component={Signup}/>
            <Route exact path ="/Signin" component={Signin}/>
            <Route exact path ="/logout" component={Logout}/>
            <Route exact path ="/users" component={Users}/>



        </div>
    </Router>
    
)

export default Routes;